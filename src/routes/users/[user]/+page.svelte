<script lang="ts">
	import { page } from '$app/stores';
	import LatestPosts from '$lib/components/home/latestPosts.svelte';
	import Icon from '@iconify/svelte';
	const iconColor = '#E82A93';
	const iconHeight = 25;

	let selected = 'new';

	export let data;
	const userPosts = data.posts;
</script>

<div class="mt-20 p-28 flex flex-col gap-8">
	<div class="border-b-4 border-xdd pb-8 flex justify-between items-end">
		<div class="flex gap-4 items-end">
			<div class="border-4 border-xdd h-28 aspect-square rounded-md" />
			<h1 class="text-6xl">{$page.url.pathname.split('/')[2]}</h1>
		</div>
		<button class="rounded-md bg-xdd p-2 px-4 text-xl flex gap-2 items-center"
			>New Post<Icon icon="lucide:book" /></button
		>
	</div>
	<div
		class="w-1/2 h-16 text-lg dark:bg-primary bg-primaryLight border dark:border-secondary border-secondaryLight rounded-md flex items-center justify-between overflow-hidden"
	>
		<button
			on:click={() => {
				selected = 'new';
			}}
			class={`${
				selected === 'new' && 'dark:bg-secondary bg-secondaryLight'
			} w-1/2 p-5 flex justify-center gap-2 dark:hover:bg-secondary hover:bg-secondaryLight`}
			>new<Icon icon="mdi:lightning-bolt-outline" color={iconColor} height={iconHeight} /></button
		>
		<button
			on:click={() => {
				selected = 'popular';
			}}
			class={`${
				selected === 'popular' && 'dark:bg-secondary bg-secondaryLight'
			} w-1/2 p-5 flex justify-center gap-2 dark:hover:bg-secondary hover:bg-secondaryLight`}
			>popular<Icon icon="mdi:heart-outline" color={iconColor} height={iconHeight} /></button
		>
	</div>
	<div class="grid grid-cols-2">
		{#each userPosts as postData}<LatestPosts {postData} />{/each}
	</div>
</div>
