import { apiUrl } from '$lib/host.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const posts = await fetch(`${apiUrl}/${params.user}/posts`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return { posts: await posts.json() };
	} catch (error) {
		console.error(error);
	}
};
