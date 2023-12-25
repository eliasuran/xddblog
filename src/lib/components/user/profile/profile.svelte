<script lang="ts">
	import { page } from '$app/stores';
	import Post from '$lib/components/home/post/post.svelte';

	import Icon from '@iconify/svelte';
	const iconColor = '#E82A93';
	const iconHeight = 25;

	let data = $page.data;
	let owner = false;
	if (data.user_name === data.userInfo.name) {
		owner = true;
	}

	interface Post {
		likes: number;
		date: string;
	}
	let userPosts: Post[] = data.posts.sort((a: Post, b: Post) => {
		return b.likes - a.likes;
	});

	let selected = true;
</script>

<div class="mt-20 p-24 flex flex-col gap-8">
	<div class="border-b-4 border-xdd pb-8 flex justify-between items-end">
		<div class="flex gap-4 items-end">
			<div class="border-4 border-xdd h-32 aspect-square rounded-md" />
			<h1 class="text-6xl">{data.userInfo.name}</h1>
		</div>
		<!-- make post button just here temporarily -->
		<div class="flex flex-col gap-2">
			{#if owner}
				<a
					href={`/settings/${data.user_name}`}
					class="rounded-md bg-xdd p-2 px-4 text-xl flex gap-2 items-center"
					>Settings<Icon icon="solar:settings-outline" height={iconHeight} /></a
				>
			{/if}
			<button class="rounded-md bg-xdd p-2 px-4 text-xl flex gap-2 items-center"
				>New Post<Icon icon="lucide:book" height={iconHeight} /></button
			>
		</div>
	</div>
	<div class="flex justify-between w-full">
		<div>
			<h1 class="text-4xl">About</h1>
			<p class="text-xl">{data.userInfo.bio}</p>
		</div>
		<div class="w-1/2 flex flex-col gap-8">
			<div
				class="h-16 text-lg dark:bg-primary bg-primaryLight border dark:border-secondary border-primaryLight rounded-md flex items-center justify-between overflow-hidden"
			>
				<button
					on:click={() => {
						selected = true;
						userPosts = userPosts.sort((a, b) => {
							return b.likes - a.likes;
						});
					}}
					class={`${
						selected && 'dark:bg-secondary bg-secondaryLight'
					} w-1/2 p-5 flex justify-center gap-2`}
					>popular<Icon icon="mdi:heart-outline" color={iconColor} height={iconHeight} /></button
				>
				<button
					on:click={() => {
						selected = false;
						userPosts = userPosts.sort((a, b) => {
							return new Date(b.date) - new Date(a.date);
						});
					}}
					class={`${
						!selected && 'dark:bg-secondary bg-secondaryLight'
					} w-1/2 p-5 flex justify-center gap-2`}
					>new<Icon
						icon="mdi:lightning-bolt-outline"
						color={iconColor}
						height={iconHeight}
					/></button
				>
			</div>
			<div class="flex flex-col gap-14">
				{#each userPosts.slice(0, 3) as postData}<Post {postData} />{/each}
				<a class="text-blue-400 self-end" href={`/users/${data.userInfo.name}?tab=Posts`}
					>See more..</a
				>
			</div>
		</div>
	</div>
</div>
