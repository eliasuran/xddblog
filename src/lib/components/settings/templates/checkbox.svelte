<script lang="ts">
	export let label: string;
	export let value: boolean;
	export let desc: string = '';
	const name = label.toLowerCase().replace(' ', '-');
</script>

<div class="flex flex-col gap-2">
	<label for={name}>{label}</label>
	{#if desc !== ''}
		<span class="text-sm text-secondary">{desc}</span>
	{/if}
	<input
		class="w-5 aspect-square rounded bg-xdd text-text outline-xdd"
		id={name}
		type="checkbox"
		bind:value
		checked={value ? true : false}
	/>
</div>
