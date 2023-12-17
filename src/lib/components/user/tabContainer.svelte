<script lang="ts">
	import { page } from '$app/stores';
	import Tab from '$lib/components/user/tab.svelte';
	import Icon from '@iconify/svelte';
</script>

<div
	class="fixed z-50 mt-16 w-screen h-14 dark:bg-primary bg-primaryLight border-b dark:border-secondary border-secondaryLight p-8 flex gap-8"
>
	<a href={`/users/${$page.data.userInfo.name}`} class="flex flex-col h-8 relative">
		<button class="flex items-center gap-2"
			><Icon icon="mingcute:profile-line" height={20} />Profile</button
		>
		{#if !$page.url.searchParams.get('tab')}
			<div class="absolute bottom-0 h-1 w-full bg-xdd" />
		{/if}
	</a>
	<Tab text="Posts" icon="lucide:book" />
	<Tab text="tbd" icon="ph:folders" />
</div>
