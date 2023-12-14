<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<div class="mt-20 p-20">
	<div class="border-b-4 border-xdd p-8 pb-12 flex justify-between items-end">
		<div class="flex gap-4 items-end">
			<div class="border-4 border-xdd h-28 aspect-square rounded-md" />
			<h1 class="text-6xl">{$page.url.pathname.split('/')[2]}</h1>
		</div>
		<button class="rounded-md bg-xdd p-2 px-4 text-xl flex gap-2 items-center"
			>New Post<Icon icon="lucide:book" /></button
		>
	</div>
	<div class="relative text-5xl text-xdd flex min-h-screen">
		<h2 class="absolute -top-9 right-14 p-2 dark:bg-bg bg-bgLight">latest</h2>
		<h2 class="absolute -top-9 left-14 p-2 dark:bg-bg bg-bgLight">popular</h2>
		<div class="bg-red-900" />
	</div>
</div>
