import { pool } from './db.js';

export const getUsers = (req, res) => {
	pool.query('SELECT * FROM users', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	});
};

export const getPost = (req, res) => {
	const postId = req.params.id;
	pool.query(
		`SELECT 
      posts.*, 
      users.name as author_username 
    FROM 
      posts 
    JOIN 
      users ON posts.author = users.id 
    WHERE 
      posts.id = $1`,
		[postId],
		(error, results) => {
			if (error) {
				throw error;
			}
			if (results.rows.length === 0) {
				res.status(404).json(`Didn't find a post with id: ${postId}`);
			} else {
				res.status(200).json(results.rows);
			}
		}
	);
};

export const getLatestPosts = (req, res) => [
	pool.query(
		`SELECT posts.*, users.name as author_username FROM posts JOIN users ON posts.author = users.id ORDER BY date DESC`,
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows);
		}
	)
];

export const getPopularPosts = (req, res) => [
	pool.query(
		`SELECT posts.*, users.name as author_username FROM posts JOIN users ON posts.author = users.id ORDER BY likes DESC LIMIT 2`,
		(error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows);
		}
	)
];

export const getFilteredPosts = (req, res) => {
	const tags = req.query.tag.split(',');
	pool.query(
		`SELECT posts.*, users.name as author_username FROM posts 
    JOIN users ON posts.author = users.id 
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
