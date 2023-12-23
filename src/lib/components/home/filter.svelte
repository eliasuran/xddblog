<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export let text: string;

	export let icon: string;
	const iconColor = '#E82A93';
	const iconHeight = 25;

	$: params = ($page.url.searchParams.get('filter') || '').split(',').filter(Boolean);
	const tab = $page.url.searchParams.get('tab');
</script>

<a
	href={tab
		? params?.includes(text)
			? `?tab=${tab}&filter=${params.filter((item) => item !== text)}`
			: `?tab=${tab}&filter=${[...params, text]}`
		: params?.includes(text)
		? `?filter=${params.filter((item) => item !== text)}`
		: `?filter=${[...params, text]}`}
	class={`${
		params?.includes(text) && 'dark:bg-secondary bg-secondaryLight'
	} border-r dark:border-secondary border-secondaryLight p-5 flex gap-2 dark:hover:bg-secondary hover:bg-secondaryLight`}
	>{text} <Icon {icon} height={iconHeight} color={iconColor} /></a
>
