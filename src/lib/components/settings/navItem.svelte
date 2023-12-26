<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	const user = $page.url.pathname.split('/')[2];
	$: param = $page.url.searchParams.get('tab');

	export let text: string;
	export let href: string;
	export let icon: string;
</script>

<a
	class={`${
		param === href ? 'dark:bg-primary/70 bg-primaryLight/70' : 'bg-transparent'
	} h-8 text-md flex gap-2 items-center px-2 relative rounded-md`}
	href={`/settings/${user}?tab=${href}`}
>
	{#if param === href}
		<div class="h-full w-1 bg-xdd rounded-full absolute left-0" />
	{/if}
	<Icon {icon} height={20} />{text}</a
>
