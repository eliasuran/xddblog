<script lang="ts">
	export let label: string;
	export let value: string;
	export let desc: string = '';
	export let width: string = '1/2';
	const name = label.toLowerCase().replace(' ', '-');
</script>

<div class="flex flex-col gap-2">
	<label for={name}>{label}</label>
	{#if desc !== ''}
		<span class="text-sm dark:text-secondary text-textLight/60">{desc}</span>
	{/if}
	<input
		class={`p-1 w-${width} rounded-md border dark:border-secondary border-primaryLight bg-transparent`}
		id={name}
		type="text"
		bind:value
	/>
</div>
