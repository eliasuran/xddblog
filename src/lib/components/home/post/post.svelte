<script lang="ts">
	import Line from './line.svelte';
	import Tags from './tags.svelte';
	import Interactions from './interactions.svelte';
	import Info from './info.svelte';
	import Popup from './popup.svelte';

	import type { PostType } from '$lib/types/post.ts';
	export let postData: PostType;

	let popup = false;
</script>

<a
	href={`posts/${postData.id}`}
	role="button"
	tabindex="0"
	on:mouseenter={() => (popup = true)}
	on:mouseleave={() => (popup = false)}
	class={'relative h-72 dark:bg-primary bg-primaryLight rounded-md border dark:border-secondary border-secondaryLight p-6 flex flex-col gap-6 break-words group cursor-pointer'}
>
	<h1 class="text-3xl group-hover:underline line-clamp-2">{postData.title}</h1>
	<Line />
	<div class="flex gap-2">
		<Tags {postData} />
		<Interactions {postData} />
	</div>
	<Line />
	<Info {postData} />
	{#if popup}<Popup />{/if}
</a>
