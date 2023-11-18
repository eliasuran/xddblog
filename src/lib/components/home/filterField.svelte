<script lang="ts">
	import Icon from '@iconify/svelte';

	const iconColor = '#E82A93';
	const iconHeight = 25;
</script>

<div
	class="w-full h-16 bg-primary border-2 border-secondary rounded-md flex items-center justify-between overflow-hidden"
>
	<div class="flex">
		<button class="border-r border-secondary p-5 flex gap-2 hover:bg-secondary"
			>new <Icon icon="mdi:lightning-bolt-outline" height={iconHeight} color={iconColor} /></button
		>
		<button class="border-r border-secondary p-5 flex gap-2 hover:bg-secondary"
			>popular <Icon icon="mdi:heart-outline" height={iconHeight} color={iconColor} /></button
		>
		<button class="border-r border-secondary p-5 flex gap-2 hover:bg-secondary"
			>react <Icon icon="mdi:react" height={iconHeight} color={iconColor} /></button
		>
		<button class="border-r border-secondary p-5 flex gap-2 hover:bg-secondary"
			>vue <Icon icon="mdi:vuejs" height={iconHeight} color={iconColor} /></button
		>
		<button class="border-r border-secondary p-5 flex gap-2 hover:bg-secondary"
			>svelte <Icon icon="simple-icons:svelte" height={iconHeight} color={iconColor} /></button
		>
	</div>
	<input />
</div>
