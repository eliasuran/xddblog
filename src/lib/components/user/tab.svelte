<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export let text: string;
	export let icon: string;
</script>

<a href={`/users/${$page.data.userInfo.name}?tab=${text}`} class="flex flex-col h-8 relative">
	<button class="flex items-center gap-2"><Icon {icon} height={20} />{text}</button>
	{#if $page.url.searchParams.get('tab') === text}
		<div class="absolute bottom-0 h-1 w-full bg-xdd" />
	{/if}
</a>
