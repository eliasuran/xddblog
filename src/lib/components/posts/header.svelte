<script lang="ts">
	import { page } from '$app/stores';

	const postData = $page.data.props.post[0];
</script>

<div>
	<h2 class="text-2xl">{$page.url.pathname.split('/')[1]}/</h2>
	<h1 class="text-7xl">{postData.title}</h1>
</div>
