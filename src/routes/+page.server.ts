import { apiUrl } from '$lib/host.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const res = await fetch(`${apiUrl}/posts`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.status === 200) {
			const posts = await res.json();
			return { posts: posts };
		}

		throw error(404, 'Not found');
	} catch (err) {
		throw error(500, 'Internal server error');
	}
};
