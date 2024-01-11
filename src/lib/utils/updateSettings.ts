import { apiUrl } from '$lib/host';

export const updateSettings = async (user: string, settings: any) => {
	try {
		const res = await fetch(`${apiUrl}/${user}/settings`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				keys: Object.keys(settings),
				values: Object.values(settings)
			})
		});
		if (res.status === 200) {
			window.location.reload();
		}
	} catch (error) {
		console.log(error);
	}
};
