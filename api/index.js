import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
	session,
	getUsers,
	register,
	login,
	logout,
	getPost,
	getLatestPosts,
	getPopularPosts,
	getFilteredPosts
} from './queries.js';

const app = express();
app.use(cors());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const host = '127.0.0.1';
const port = 3250;

app.get('/session', session);
app.get('/users', getUsers);
app.post('/register', register);
app.post('/login', login);
app.post('/logout', logout);
app.get('/posts/:id', getPost);
app.get('/latest', getLatestPosts);
app.get('/popular', getPopularPosts);
app.get('/filtered', getFilteredPosts);

app.listen(port, host, () => {
	console.log(`Running on ${host}:${port}`);
});
