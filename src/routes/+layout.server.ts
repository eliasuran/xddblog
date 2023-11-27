import { apiUrl } from '$lib/host';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }: any) => {
	const cookie = cookies.get('session');
	console.log(cookie);
	const res = await fetch(`${apiUrl}/session`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	});
	if (res.status === 200) {
		return await res.json();
	} else {
		console.log('No token:', res.status);
		return {};
	}
};
