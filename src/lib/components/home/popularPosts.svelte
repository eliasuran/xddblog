<script lang="ts">
	import { slide } from 'svelte/transition';
	export let postData: any;

	import Icon from '@iconify/svelte';
	const iconColor = '#E82A93';
	const iconHeight = '25';

	let popup = false;
</script>

<div
	role="button"
	tabindex="0"
	on:mouseenter={() => (popup = true)}
	on:mouseleave={() => (popup = false)}
	class={'relative h-4/5 w-[26rem] dark:bg-primary bg-primaryLight rounded-md border dark:border-secondary border-secondaryLight p-6 flex flex-col justify-center gap-6 cursor-auto break-words'}
>
	<h1 class="text-3xl">{postData.title}</h1>
	<div class="w-full h-24 line-clamp-4">
		<span>{postData.content} </span>
	</div>
	<div class="flex justify-around">
		<div>
			<span class="text-xdd">by</span>
			<a href={`/users/${postData.author_username}`} class="underline cursor-pointer"
				>{postData.author_username}</a
			>
		</div>
		<div class="flex gap-2 justify-end">
			<button class="cursor-pointer"
				><Icon icon="mdi:heart-outline" color={iconColor} height={iconHeight} /></button
			>
			{postData.likes}
		</div>
		<div class="flex gap-2 justify-end">
			<button class="cursor-pointer">
				<Icon icon="mdi:comment-outline" color={iconColor} height={iconHeight} /></button
			>
			{postData.comments}
		</div>
	</div>
	{#if popup}
		<a
			href={`posts/${postData.id}`}
			transition:slide={{ duration: 300, axis: 'y' }}
			class="w-full h-20 grid place-items-center bg-xdd rounded-b-lg absolute left-0 bottom-0 duration-300 translate-y-full"
			>Click to read!
		</a>
	{/if}
</div>
