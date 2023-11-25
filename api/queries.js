import { pool } from './db.js';
import bcrypt from 'bcrypt';

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
	const { username, password } = req.query; // replace with body since it works after bodyParser implementation
	try {
		const hashedPassword = await bcrypt.hash(password, 10); // hash password with bcrypt
		await pool.query('INSERT INTO users (name, password) VALUES ($1, $2)', [
			// create the new user
			username,
			hashedPassword // use hashed password
		]);

		const data = await pool.query('SELECT * FROM users WHERE name = $1', [username]); // get the created user

		res.status(200).send({ status: 'ok', user: data.rows[0] }); // return username and passwrod
	} catch (error) {
		console.error('Couldnt create user', error);
	}
};

// login user
export const login = async (req, res) => {
	const { username, password } = req.body;
	try {
		const foundPassword = await pool.query('SELECT password FROM users WHERE name = $1', [
			username
		]);

		bcrypt.compare(password, foundPassword.rows[0].password, async (err, result) => {
			if (err) {
				console.log('Error decoding password', err);
				return;
			}
			if (result) {
				const data = await pool.query(
					'SELECT users.name, users.uid FROM users WHERE name = $1 AND password = $2',
					[username, foundPassword.rows[0].password]
				);
				if (data.rowCount > 0) {
					res.status(200).send({ status: 'ok', user: data.rows[0] });
				}
			} else {
				console.log('Incorrect password');
			}
		});
		console.log();
	} catch (error) {
		console.log(error);
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

// get the latest posts
export const getLatestPosts = (req, res) => [
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

// get most popular posts (currently limited to 2)
export const getPopularPosts = (req, res) => [
	pool.query(
		`SELECT posts.*, users.name as author_username FROM posts JOIN users ON posts.author = users.uid ORDER BY likes DESC LIMIT 2`,
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows);
		}
	)
];

// get posts based on current filter
export const getFilteredPosts = (req, res) => {
	const tags = req.query.tag.split(',');
	pool.query(
		`SELECT posts.*, users.name as author_username FROM posts 
    JOIN users ON posts.author = users.uid 
    WHERE posts.tags @> $1::text[]`,
		[tags],
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows);
		}
	);
};
