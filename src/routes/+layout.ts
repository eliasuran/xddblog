import { apiUrl } from '$lib/host';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (window) => {
	try {
		const res = await window.fetch(`${apiUrl}/session`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		});
		if (res.status === 200) {
			return await res.json();
		} else {
			return {};
		}
	} catch (err) {
		console.log(err);
	}
};
