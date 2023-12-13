<script lang="ts">
	import Icon from '@iconify/svelte';

	export let text: string;

	export let icon: string;
	const iconColor = '#E82A93';
	const iconHeight = 25;

	export let selected: string[];
</script>

<button
	on:click={() => {
		if (selected.includes(text)) {
			const index = selected.indexOf(text);
			if (index > -1) {
				selected.splice(index, 1);
			}
		} else {
			selected.push(text);
		}
		selected = selected;
	}}
	class={`${
		selected.includes(text) && 'dark:bg-secondary bg-secondaryLight'
	} border-r dark:border-secondary border-secondaryLight p-5 flex gap-2 dark:hover:bg-secondary hover:bg-secondaryLight`}
	>{text} <Icon {icon} height={iconHeight} color={iconColor} /></button
>
