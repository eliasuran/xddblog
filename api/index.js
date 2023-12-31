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
	getAllPosts,
	getUserPosts,
	getSettings,
	updateSettings,
	getPublicProfileSettings,
	getAccountSettings
} from './queries.js';

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const host = '127.0.0.1';
const port = 3250;

app.get('/users', getUsers);

// login register and session management
app.get('/session', session);
app.post('/register', register);
app.post('/login', login);
app.post('/logout', logout);

// anything reladed to posts
app.get('/posts/:id', getPost);
app.get('/posts', getAllPosts);
app.get('/:user/posts', getUserPosts);

// get various settings
app.get('/:user/settings', getSettings);
app.post('/:user/settings', updateSettings);
app.get('/:user/settings/public-profile', getPublicProfileSettings);
app.get('/:user/settings/account', getAccountSettings);

app.listen(port, host, () => {
	console.log(`Running on ${host}:${port}`);
});
