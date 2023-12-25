<script lang="ts">
	import { page } from '$app/stores';
	import { apiUrl } from '$lib/host';
	export let data;

	interface settings {
		user: string;
	}

	let settings: settings = { user: 'Loading..' };
	const getSettings = async () => {
		try {
			const res = await fetch(
				`${apiUrl}/${$page.url.pathname.split('/')[2]}/settings?user=${data.user_name}`
			);
			if (res.status === 200) {
				settings = await res.json();
			} else if (res.status === 401) {
				window.location.href = '/';
			} else {
				console.log('Error', await res.json());
			}
		} catch (err) {
			console.log('Caught error', err);
		}
	};

	getSettings();
</script>

<div class="mt-16 flex flex-col p-5">
	<div class="w-full h-24 flex items-center gap-4 my-6">
		<div class="border-4 border-xdd h-full aspect-square rounded-md" />
		<h1 class="self-end text-4xl">{settings.user}</h1>
	</div>
	<div class="flex min-h-screen">
		<div class="w-72 bg-red-900" />
		<div />
	</div>
</div>
