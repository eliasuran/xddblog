import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
	getUsers,
	register,
	login,
	getPost,
	getLatestPosts,
	getPopularPosts,
	getFilteredPosts
} from './queries.js';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const host = '127.0.0.1';
const port = 3250;

app.get('/users', getUsers);
app.post('/register', register);
app.post('/login', login);
app.get('/posts/:id', getPost);
app.get('/latest', getLatestPosts);
app.get('/popular', getPopularPosts);
app.get('/filtered', getFilteredPosts);

app.listen(port, host, () => {
	console.log(`Running on ${host}:${port}`);
});
