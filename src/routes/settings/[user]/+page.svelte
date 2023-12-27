<script lang="ts">
	import Nav from '$lib/components/settings/nav.svelte';
	import PublicProfile from '$lib/components/settings/tabs/publicProfile.svelte';
	import Account from '$lib/components/settings/tabs/account.svelte';
	import { page } from '$app/stores';
	import { apiUrl } from '$lib/host';
	import { onMount } from 'svelte';
	export let data;

	import type { NameSettings } from '$lib/types/nameSettings.ts';
	let user: NameSettings = { display_name: '', name: 'Loading..' };
	const getSettings = async () => {
		try {
			const res = await fetch(
				`${apiUrl}/${$page.url.pathname.split('/')[2]}/settings?user=${data.user_name}`
			);
			if (res.status === 200) {
				user = await res.json();
			} else if (res.status === 401) {
				window.location.href = '/';
			} else {
				console.log('Error', await res.json());
			}
		} catch (err) {
			console.log('Caught error', err);
		}
	};

	onMount(() => {
		getSettings();
	});

	$: param = $page.url.searchParams.get('tab');
</script>

<div class="mt-16 flex flex-col p-5">
	<div class="w-full h-24 flex items-center gap-4 my-6">
		<div class="border-4 border-xdd h-full aspect-square rounded-md" />
		<div class="self-end flex flex-col">
			{#if user.display_name}
				<h1 class="text-3xl">{user.display_name}</h1>
			{/if}
			<h1 class="text-2xl text-xdd">@{user.name}</h1>
		</div>
	</div>
	<div class="flex gap-8 w-full min-h-screen">
		<Nav />
		<div class="w-3/4">
			{#if param === 'public-profile'}
				<PublicProfile />
			{:else if param === 'account'}
				<Account />
			{/if}
		</div>
	</div>
</div>
