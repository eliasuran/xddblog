import express from 'express';
import { getUsers, getPost } from './queries.js';

const app = express();
const port = 3001;

app.get('/users', getUsers);
app.get('/posts/:id', getPost);

app.listen(port, () => {
	console.log(`Running on localhost:${port}`);
});
