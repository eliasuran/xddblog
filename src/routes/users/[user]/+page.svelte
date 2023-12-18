<script lang="ts">
	import { page } from '$app/stores';

	import TabContainer from '$lib/components/user/tabContainer.svelte';
	import Profile from '$lib/components/user/profile/profile.svelte';
</script>

<TabContainer />

{#if $page.url.searchParams.get('tab') === 'Posts'}
	<h2 class="mt-20 p-24 flex flex-col gap-4">
		<div
			class="h-16 text-lg dark:bg-primary bg-primaryLight border dark:border-secondary border-primaryLight rounded-md flex items-center"
		/>
	</h2>
{:else}
	<Profile />
{/if}
