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

		if (posts.status === 404) {
			return {
				status: 404,
				error: new Error('User not found'),
				posts: []
			};
		}

		const { user, userPosts } = await posts.json();
		return { userInfo: user, posts: userPosts };
	} catch (error) {
		console.error(error);
	}
};
