<script lang="ts">
	import { slide } from 'svelte/transition';
	export let postData: any;

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
	<div class="w-full h-24 line-clamp-4 shadow-primary">
		<span>{postData.content} </span>
	</div>
	<div class="flex justify-around">
		<div>
			<span class="text-xdd">by</span>
			<a href={`/users/${postData.author_username}`} class="underline cursor-pointer"
				>{postData.author_username}</a
			>
		</div>
		<span>{new Date(postData.date).toLocaleDateString('no-NO')}</span>
		<span>{Math.floor(postData.time / 60)} minute read</span>
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
