<script lang="ts">
	import { page } from '$app/stores';

	import TabContainer from '$lib/components/user/tabContainer.svelte';
	import Profile from '$lib/components/user/profile/profile.svelte';
	import Posts from '$lib/components/user/posts/posts.svelte';
</script>

<TabContainer />

{#if $page.url.searchParams.get('tab') === 'Posts'}
	<Posts />
{:else}
	<Profile />
{/if}
