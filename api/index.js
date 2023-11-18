import express from 'express';
import { getUsers, getPost, getLatestPosts, getPopularPosts } from './queries.js';

export const app = express();
const port = 3001;

app.get('/users', getUsers);
app.get('/posts/:id', getPost);
app.get('/latest', getLatestPosts);
app.get('/popular', getPopularPosts);

app.listen(port, () => {
	console.log(`Running on localhost:${port}`);
});
