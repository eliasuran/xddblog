<script lang="ts">
	import { page } from '$app/stores';
	import { getSettings } from '$lib/utils/getSettings';
	import { onMount } from 'svelte';
	import Text from '../templates/text.svelte';
	import Checkbox from '../templates/checkbox.svelte';

	interface Settings {
		name: string;
		visibility: boolean;
	}
	let settings: Settings = { name: '', visibility: true };

	onMount(async () => {
		settings = await getSettings($page.data.user_name, $page.url.searchParams.get('tab') || '');
	});

	const save = () => {
		console.log(settings);
	};
</script>

<form on:submit={save} class="h-full flex flex-col gap-4">
	<h1 class="text-3xl">Account</h1>
	<div class="h-[1px] dark:bg-secondary bg-primaryLight" />
	<Text
		label="Username"
		bind:value={settings.name}
		desc="Everything done on xddblog is connected to you via your username. Can only be changed once every 30 days."
	/>
	<Checkbox
		label="Public Profile"
		bind:value={settings.visibility}
		desc="Your posts and likes are visible to everyone."
	/>
	<button class="rounded-md p-2 bg-xdd w-20" type="submit">Save</button>
</form>
