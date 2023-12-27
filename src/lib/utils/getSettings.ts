import { apiUrl } from '$lib/host';

export const getSettings = async (user: string, tab: string) => {
	try {
		const res = await fetch(`${apiUrl}/${user}/settings/${tab}`);
		if (res.status === 200) {
			const data = await res.json();
			return data;
		} else {
			return { error: 'Error fetching settings' };
		}
	} catch (err) {
		console.log(err);
	}
};
