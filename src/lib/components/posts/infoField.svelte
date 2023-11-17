<script lang="ts">
	export let postData: any;
	import Icon from '@iconify/svelte';

	const iconColor = '#E82A93';
	const iconHeight = '25';
</script>

<div
	class="w-full h-20 dark:bg-primary bg-primaryLight border dark:border-secondary border-secondaryLight rounded-md flex justify-around items-center"
>
	<div class="w-1/2 flex justify-around text-xdd">
		<span>{new Date(postData.date).toLocaleDateString('no-NO')}</span>
		<span>{postData.words} words</span>
		<span>{Math.floor(postData.time / 60)} minute read</span>
	</div>
	<Icon icon="ci:line-l" height="40" color={iconColor} />
	<div class="w-1/2 flex justify-around">
		<Icon icon="mdi:heart-outline" color={iconColor} height={iconHeight} />
		<Icon icon="mdi:comment-outline" color={iconColor} height={iconHeight} />
		<Icon icon="mdi:bookmark-outline" color={iconColor} height={iconHeight} />
	</div>
</div>
