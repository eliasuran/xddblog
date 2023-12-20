<script lang="ts">
	import Icon from '@iconify/svelte';
	const iconHeight = 19;

	import type { PostType } from '$lib/types/post.ts';
	export let postData: PostType;
</script>

<div class="flex w-1/2 gap-2 justify-around items-center">
	<div class="flex items-center gap-1">
		<Icon icon="mdi:heart-outline" color="#E82A93" height={iconHeight} />{postData.likes}
	</div>
	<div class="flex items-center gap-1">
		<Icon icon="mdi:comment-outline" color="#E82A93" height={iconHeight} />{postData.comments}
	</div>
</div>
