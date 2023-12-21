<script lang="ts">
	export let addFilter: (filter: string) => void;
	export let selected: string[];
	import Filter from './filter.svelte';
</script>

<div
	class="w-full h-16 dark:bg-primary bg-primaryLight border dark:border-secondary border-primaryLight rounded-md flex items-center justify-between overflow-hidden"
>
	<div class="flex">
		<Filter {selected} {addFilter} text={'react'} icon={'mdi:react'} />
		<Filter {selected} {addFilter} text={'vue'} icon={'mdi:vuejs'} />
		<Filter {selected} {addFilter} text={'svelte'} icon={'simple-icons:svelte'} />
	</div>
	<input
		class="bg-transparent w-full mx-2 border dark:border-secondary border-secondaryLight p-2 rounded-md outline-none"
		type="text"
		placeholder="search posts, authors..."
	/>
</div>
