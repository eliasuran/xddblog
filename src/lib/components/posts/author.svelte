<script lang="ts">
	import { page } from '$app/stores';

	const postData = $page.data.props.post[0];
</script>

<div class="text-xdd flex gap-2 items-center">
	<img alt="profil pic" class="w-20 aspect-square rounded-full border-2 border-xdd" />
	<div class="flex flex-col">
		<span class="dark:text-text text-textLight underline">{postData.author_username}</span>
		<span>author desc</span>
	</div>
</div>
