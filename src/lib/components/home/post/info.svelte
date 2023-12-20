<script lang="ts">
	import type { PostType } from '$lib/types/post.ts';
	export let postData: PostType;
</script>

<div class="flex justify-around">
	<span>{new Date(postData.date).toLocaleDateString('no-NO')}</span>
	<span>{Math.floor(postData.time / 60)} min read</span>
	<span>{postData.words} words</span>
</div>
