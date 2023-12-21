<script lang="ts">
	import Icon from '@iconify/svelte';

	export let text: string;

	export let icon: string;
	const iconColor = '#E82A93';
	const iconHeight = 25;

	export let addFilter: (filter: string) => void;
	export let selected: string[];
</script>

<button
	on:click={() => {
		addFilter(text);
	}}
	class={`${
		selected.includes(text) && 'dark:bg-secondary bg-secondaryLight'
	} border-r dark:border-secondary border-secondaryLight p-5 flex gap-2 dark:hover:bg-secondary hover:bg-secondaryLight`}
	>{text} <Icon {icon} height={iconHeight} color={iconColor} /></button
>
