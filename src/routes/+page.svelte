<script lang="ts">
	import LatestPosts from '$lib/components/home/latestPosts.svelte';
	import PopularPosts from '$lib/components/home/popularPosts.svelte';
	import FilterField from '$lib/components/home/filterField.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const latestPostsData = data.props.latestPosts;
	const popularPotsData = data.props.popularPosts;
</script>

<div class="mt-20 dark:text-text text-textLight p-24 flex flex-col gap-20 font-mono">
	<div class="relative border-t-4 border-xdd w-full h-96 pt-6 flex justify-around items-center">
		<h1 class="absolute -top-7 left-14 text-5xl dark:bg-bg bg-bgLight px-4 text-xdd">
			latest posts
		</h1>
		{#each latestPostsData as postData (postData.id)}<LatestPosts {postData} />{/each}
	</div>

	<div class="relative border-t-4 border-xdd w-full h-96 pt-6 flex justify-around items-center">
		<h1 class="absolute -top-7 right-14 text-5xl dark:bg-bg bg-bgLight px-4 text-xdd">
			popular this week
		</h1>
		{#each popularPotsData as postData (postData.id)}<PopularPosts {postData} />{/each}
	</div>

	<div class="relative border-t-4 border-xdd w-full h-96 pt-16 flex justify-around">
		<h1 class="absolute -top-7 text-5xl dark:bg-bg bg-bgLight px-4 text-xdd">explore</h1>
		<FilterField />
	</div>
</div>
