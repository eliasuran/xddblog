<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="mt-20 p-20">
	<div class="border-b-4 border-xdd p-8">
		<h1 class="text-7xl">{$page.url.pathname.split('/')[2]}</h1>
	</div>
	<div class="relative flex flex-col gap-4">
		<h1 class="dark:bg-bg bg-bgLight px-4 absolute right-14 -top-7 text-xdd text-5xl">posts</h1>
	</div>
</div>
