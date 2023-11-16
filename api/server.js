import pkg from 'pg';
const { Client } = pkg;
import 'dotenv/config';

const client = new Client({
	user: process.env.POSTGRES_USER,
	host: 'localhost',
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PASSWORD,
	port: 5432
});

client.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
});
