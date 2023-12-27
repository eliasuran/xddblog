<script lang="ts">
	export let label: string;
	export let value: string;
	export let desc: string = '';
	export let width: string = '1/2';
	const name = label.toLowerCase().replace(' ', '-');
</script>

<div class="flex flex-col gap-2">
	<label for={name}>{label}</label>
	{#if desc}
		<span class="text-sm text-secondary">{desc}</span>
	{/if}
	<textarea
		class={`p-1 w-${width} rounded-md border dark:border-secondary border-primaryLight bg-transparent`}
		id={name}
		bind:value
	/>
</div>
