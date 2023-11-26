<script lang="ts">
	import Icon from '@iconify/svelte';
	const iconColor = '#E82A93';
	const iconHeight = '20';

	let popup = false;
	import { slide } from 'svelte/transition';

	export let postData: any;
</script>

<div
	role="button"
	tabindex="0"
	on:mouseenter={() => (popup = true)}
	on:mouseleave={() => (popup = false)}
	class="w-full h-16 bg-primary border border-secondary rounded-md relative flex justify-between items-center px-4 cursor-auto"
>
	<h1 class="text-2xl">{postData.title}</h1>
	<div class="flex flex-col items-end gap-1">
		<div class="flex gap-1">
			{postData.likes}<Icon icon="mdi:heart-outline" color={iconColor} height={iconHeight} />
		</div>
		<div class="flex gap-1">
			{postData.comments}<Icon icon="mdi:comment-outline" color={iconColor} height={iconHeight} />
		</div>
	</div>
	{#if popup}
		<a
			href={`/posts/${postData.id}`}
			transition:slide={{ duration: 300, axis: 'x' }}
			class="h-full grid place-items-center bg-xdd absolute top-0 right-0 duration-300 rounded-r-lg"
			>Click to read!
		</a>
	{/if}
</div>
