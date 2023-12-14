import { apiUrl } from '$lib/host.js';
import type { PageServerData } from './$types';

export const load: PageServerData = async () => {
	try {
		const latestRes = await fetch(`${apiUrl}/users/latest`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const popularRes = await fetch(`${apiUrl}/users/popular`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (latestRes.ok && popularRes.ok) {
			const latestPosts = await latestRes.json();
			const popularPosts = await popularRes.json();
			return { props: { latestPosts, popularPosts } };
		}
	} catch (error) {
		console.error(error);
	}
};
