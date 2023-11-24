import express from 'express';
import cors from 'cors';
import { getUsers, getPost, getLatestPosts, getPopularPosts, getFilteredPosts } from './queries.js';

const app = express();
app.use(cors());
const host = '127.0.0.1';
const port = 3250;

app.get('/users', getUsers);
app.get('/posts/:id', getPost);
app.get('/latest', getLatestPosts);
app.get('/popular', getPopularPosts);
app.get('/filtered', getFilteredPosts);

app.listen(port, host, () => {
	console.log(`Running on ${host}:${port}`);
});
