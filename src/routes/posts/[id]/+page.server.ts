import { apiUrl } from '$lib/host.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }: any) => {
	try {
		const res = await fetch(`${apiUrl}/posts/${params.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			const post = await res.json();
			return { props: { post } };
		}

		throw error(res.status, 'Not found');
	} catch (err) {
		throw error(500, 'Internal server error');
	}
};
