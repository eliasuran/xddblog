<script>
	import Icon from '@iconify/svelte';
	const iconColor = '#E82A93';
	const iconHeight = 35;

	let selected = 'bookmarked';
</script>

<div class="relative flex flex-col gap-4">
	<div class="absolute left-8 -top-7 flex gap-8">
		<button
			on:click={() => (selected = 'bookmarked')}
			class="dark:bg-bg bg-bgLight p-2 cursor-pointer"
		>
			<Icon
				icon={selected === 'bookmarked' ? 'mdi:bookmark' : 'mdi:bookmark-outline'}
				color={iconColor}
				height={iconHeight}
			/>
		</button>
		<button on:click={() => (selected = 'liked')} class="dark:bg-bg bg-bgLight p-2 cursor-pointer">
			<Icon
				icon={selected === 'liked' ? 'mdi:heart' : 'mdi:heart-outline'}
				color={iconColor}
				height={iconHeight}
			/>
		</button>
	</div>
	<h1 class="dark:bg-bg bg-bgLight px-4 absolute right-14 -top-7 text-xdd text-5xl">
		{selected} posts
	</h1>
</div>
