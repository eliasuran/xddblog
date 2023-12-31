import { pool } from './db.js';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { parse } from 'cookie';

export const session = async (req, res) => {
	const cookies = parse(req.headers.cookie || '');
	const userSession = await pool.query('SELECT * FROM session WHERE id = $1', [cookies.session]);
	if (userSession.rowCount > 0) {
		res.status(200).send(userSession.rows[0]);
	} else {
		res.status(201).send({});
	}
};

// get all users
export const getUsers = (req, res) => {
	pool.query('SELECT * FROM users', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	});
};

// register a new user
export const register = async (req, res) => {
	const { username, password } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10); // hash password with bcrypt
		await pool.query('INSERT INTO users (name, password) VALUES ($1, $2)', [
			// create the new user
			username,
			hashedPassword // use hashed password
		]);

		const data = await pool.query('SELECT * FROM users WHERE name = $1', [username]); // get the created user

		res.status(200).send({ user: data.rows[0] }); // return username and passwrod
	} catch (error) {
		console.log(error);
		if (error.code == 23505) {
			res.status(409).send({ error: 'User already exists' });
		}
	}
};

// login user
export const login = async (req, res) => {
	const { username, password } = req.body;
	try {
		//find the hashed password connected to the user in the db
		const foundPassword = await pool.query('SELECT password FROM users WHERE name = $1', [
			username
		]);
		// compare the password from the frontend with the hashed one, if its correct...
		bcrypt.compare(password, foundPassword.rows[0].password, async (err, result) => {
			if (err) {
				console.log('Error decoding password', err);
				return;
			}
			if (result) {
				// find the user that you just had the correct username and password for
				const data = await pool.query(
					'SELECT users.name, users.uid FROM users WHERE name = $1 AND password = $2',
					[username, foundPassword.rows[0].password]
				);
				// if it finds a user with the login information, create a session which contains username and uid
				if (data.rowCount > 0) {
					const sessionId = v4(); // generate a sessionId
					// delete any new session created if one already exists (only for production and testing cause log out isnt a feature yet and using postman)
					const existingSession = await pool.query('SELECT * FROM session WHERE user_name = $1', [
						username
					]);
					if (existingSession) {
						await pool.query('DELETE FROM session WHERE user_name = $1', [username]);
					}
					// create session with the sessionId, user_id and username
					await pool.query('INSERT INTO session (id, user_id, user_name) VALUES ($1, $2, $3)', [
						sessionId,
						data.rows[0].uid,
						username
					]);
					res.cookie('session', sessionId, {
						httpOnly: true,
						secure: true,
						sameSite: 'none',
						expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
					});
					res.status(200).send({ status: 'ok', user: data.rows[0] }); // in the end, return user data
				}
			} else {
				res.status(401).send({ error: 'Incorrect password' });
			}
		});
	} catch (error) {
		console.log(error);
	}
};

// log out user
export const logout = async (req, res) => {
	// TODO: add deleting session from db
	if (req.headers.cookie) {
		res.setHeader(
			'Set-Cookie',
			'session=; HttpOnly; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
		);
		res.status(200).send({ status: 'ok' });
	} else {
		res.status(400).send({ error: 'No session found' });
	}
};

// get a certain post
export const getPost = (req, res) => {
	const postId = req.params.id;
	pool.query(
		`SELECT 
      posts.*, 
      users.name as author_username 
    FROM 
      posts 
    JOIN 
      users ON posts.author = users.uid 
    WHERE 
      posts.id = $1`,
		[postId], // get all info on post and author thru id
		(error, results) => {
			if (error) {
				throw error;
			}
			if (results.rows.length === 0) {
				res.status(404).json(`Didn't find a post with id: ${postId}`);
			} else {
				res.status(200).json(results.rows); //return post information
			}
		}
	);
};

// get all posts for landing page
export const getAllPosts = (req, res) => [
	pool.query(
		`SELECT posts.*, users.name as author_username FROM posts JOIN users ON posts.author = users.uid ORDER BY date DESC`,
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows);
		}
	)
];

export const getUserPosts = async (req, res) => {
	const user = req.params.user;
	const data = await pool.query('SELECT users.name, users.bio FROM users WHERE users.name = $1', [
		user
	]);
	if (data.rowCount === 0) {
		return res.status(404).send({ error: 'User not found' });
	}
	pool.query(
		'SELECT posts.*, users.name as author_username FROM posts JOIN users ON posts.author = users.uid WHERE users.name = $1',
		[user],
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json({ user: data.rows[0], userPosts: results.rows });
		}
	);
};

export const getSettings = async (req, res) => {
	const checkingUser = req.params.user;
	const loggedInUser = req.query.user;
	if (checkingUser !== loggedInUser) {
		return res.status(401).send({ error: 'Unauthorized' });
	}
	pool.query(
		'SELECT users.name, users.display_name FROM users WHERE name = $1',
		[loggedInUser],
		(error, results) => {
			if (error) {
				throw error;
			}
			return res.status(200).send(results.rows[0]);
		}
	);
};

export const getPublicProfileSettings = async (req, res) => {
	pool.query(
		'SELECT users.display_name, users.bio FROM users WHERE name = $1',
		[req.params.user],
		(error, results) => {
			if (error) {
				throw error;
			}
			return res.status(200).send(results.rows[0]);
		}
	);
};

export const getAccountSettings = async (req, res) => {
	pool.query(
		'SELECT users.name, users.visibility FROM users WHERE name = $1',
		[req.params.user],
		(error, results) => {
			if (error) {
				throw error;
			}
			return res.status(200).send(results.rows[0]);
		}
	);
};

export const updateSettings = async (req, res) => {
	try {
		req.body.keys.forEach(async (key, i) => {
			await pool.query(
				`UPDATE users SET ${req.body.keys[i].replace(/["']+/g, '')} = $1 WHERE name = $2`,
				[req.body.values[i], req.params.user]
			);
		});
		return res.status(200).send({ status: 'ok' });
	} catch (error) {
		console.log(error);
	}
};
