<script lang="ts">
	import type { PostType } from '$lib/types/post.ts';
	export let postData: PostType;
</script>

{#if postData.tags}
	<div class="flex flex-wrap w-1/2 gap-2">
		{#each postData.tags as tag}
			<div class="dark:border-secondary border-secondaryLight border rounded-md p-1">
				{tag}
			</div>
		{/each}
	</div>
	<div class="w-[2px] bg-secondary" />
{/if}
