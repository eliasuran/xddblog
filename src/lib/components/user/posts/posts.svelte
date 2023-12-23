<script lang="ts">
	import FilterField from '$lib/components/home/filterField.svelte';
	import FilterResults from '$lib/components/home/filterResults.svelte';

	import type { PostType } from '$lib/types/post.ts';
	import { page } from '$app/stores';
	let data = $page.data;

	$: params = ($page.url.searchParams.get('filter') || '').split(',').filter(Boolean);
	$: filtered = data.posts.filter((post: PostType) => {
		return params.every((param: string) => {
			return post.tags?.includes(param);
		});
	});
</script>

<div class="mt-20 p-24 flex flex-col gap-4">
	<FilterField />
	<div class="flex flex-col gap-4">
		{#each filtered as postData}<FilterResults {postData} />{/each}
	</div>
</div>
