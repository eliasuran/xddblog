<script lang="ts">
	import Icon from '@iconify/svelte';
	import Post from '$lib/components/home/post/post.svelte';
	import FilterField from '$lib/components/home/filterField.svelte';
	import FilterResults from '$lib/components/home/filterResults.svelte';
	import type { PostType } from '$lib/types/post.ts';
	import type { PageData } from './$types';
	export let data: PageData;

	let selected = ['svelte'];

	const posts: PostType[] = data.posts.slice();
	const popular: PostType[] = posts.slice().sort((a: PostType, b: PostType) => b.likes - a.likes);
</script>

<div class="mt-20 p-24 flex flex-col gap-20 select-none">
	<div class="text-xdd text-9xl flex justify-center gap-2">
		<h1>xddblog</h1>
		<Icon icon="simple-icons:svelte" />
	</div>
	<div class="relative border-t-4 border-xdd w-full h-96 pt-6 flex justify-around items-center">
		<h1 class="absolute -top-7 left-14 text-5xl dark:bg-bg bg-bgLight px-4 text-xdd">
			latest posts
		</h1>
		{#each posts.slice(0, 2) as postData (postData.id)}<div class="w-[26rem]">
				<Post {postData} />
			</div>{/each}
	</div>

	<div class="relative border-t-4 border-xdd w-full h-96 pt-6 flex justify-around items-center">
		<h1 class="absolute -top-7 right-14 text-5xl dark:bg-bg bg-bgLight px-4 text-xdd">
			popular this week
		</h1>
		{#each popular.splice(0, 2) as postData (postData.id)}<div class="w-[26rem]">
				<Post {postData} />
			</div>{/each}
	</div>

	<div class="relative border-t-4 border-xdd w-full pt-16 flex flex-col gap-8 items-center">
		<h1 class="absolute -top-7 text-5xl dark:bg-bg bg-bgLight px-4 text-xdd">explore</h1>
		<FilterField {selected} />
		<div class="flex flex-col gap-4 w-full">
			{#each posts.slice(0, 8) as postData} <FilterResults {postData} /> {/each}
		</div>
	</div>
</div>
