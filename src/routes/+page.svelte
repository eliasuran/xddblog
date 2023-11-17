<script lang="ts">
	import Icon from '@iconify/svelte';

	const iconColor = '#E82A93';
	const iconHeight = '28';
	const style =
		'h-4/5 w-[26rem] dark:bg-primary bg-primaryLight rounded-md border dark:border-secondary border-secondaryLight p-6 flex flex-col justify-center gap-6';
</script>

<div class="mt-20 dark:text-text text-textLight p-24 flex flex-col font-mono">
	<h1 class="absolute ml-14 -mt-5 text-5xl dark:bg-bg bg-bgLight px-4 text-xdd">LATEST POSTS</h1>
	<div class="border-t-4 border-xdd w-full h-96 pt-6 flex gap-12 items-center">
		<div class={style}>
			<!-- Title of the post -->
			<h1 class="text-3xl">WHY SVELTE GOOD</h1>
			<!-- either description or something the author has to set themselves, or the first 25 - 30 words of the post -->
			<div class="w-full h-24 line-clamp-4 shadow-inner shadow-primary">
				<span
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum sed mollitia
					expedita modi nihil sequi, aliquam explicabo accusantium quaerat sit harum magnam, cumque
					nulla?</span
				>
			</div>
			<!-- Author + number of likes and comments (click to insta like or click comments to hop to comments) -->
			<div class="flex gap-14">
				<div>By <span class="underline cursor-pointer text-xdd">author</span></div>
				<div class="flex gap-2 items-center">
					14<Icon icon="mdi:heart-outline" color={iconColor} height={iconHeight} />
				</div>
				<div class="flex gap-2 items-center">
					5<Icon icon="mdi:comment-outline" color={iconColor} height={iconHeight} />
				</div>
			</div>
		</div>
	</div>
</div>
