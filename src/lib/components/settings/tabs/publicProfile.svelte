<script lang="ts">
	import { apiUrl } from '$lib/host';
	import { page } from '$app/stores';
	import { getSettings } from '$lib/utils/getSettings';
	import { onMount } from 'svelte';
	import Text from '../templates/text.svelte';
	import TextArea from '../templates/textArea.svelte';

	interface Settings {
		display_name: string;
		bio: string;
	}
	let settings: Settings = { display_name: '', bio: '' };

	onMount(async () => {
		settings = await getSettings($page.data.user_name, $page.url.searchParams.get('tab') || '');
	});

	const save = async () => {
		try {
			console.log(settings);
			const res = await fetch(`${apiUrl}/${$page.data.user_name}/settings`, {
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
</script>

<form on:submit={save} class="h-full flex flex-col gap-4">
	<h1 class="text-3xl">Public Profile</h1>
	<div class="h-[1px] dark:bg-secondary bg-primaryLight" />
	<Text
		label="Name"
		bind:value={settings.display_name}
		desc="Not to be confused with username, which is your users 'handle'. Name can be changed anytime."
	/>
	<TextArea label="Bio" bind:value={settings.bio} width="2/3" />
	<button class="rounded-md p-2 bg-xdd w-20" type="submit">Save</button>
</form>
