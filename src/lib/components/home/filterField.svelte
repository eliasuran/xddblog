<script lang="ts">
	export let selected: string[];
	import Filter from './filter.svelte';
</script>

<div
	class="w-full h-16 dark:bg-primary bg-primaryLight border dark:border-secondary border-secondaryLight rounded-md flex items-center justify-between overflow-hidden"
>
	<div class="flex">
		<Filter {selected} text={'new'} icon={'mdi:lightning-bolt-outline'} />
		<Filter {selected} text={'popular'} icon={'mdi:heart-outline'} />
		<Filter {selected} text={'react'} icon={'mdi:react'} />
		<Filter {selected} text={'vue'} icon={'mdi:vuejs'} />
		<Filter {selected} text={'svelte'} icon={'simple-icons:svelte'} />
	</div>
	<input
		class="bg-transparent w-full mx-2 border dark:border-secondary border-secondaryLight p-2 rounded-md outline-none"
		type="text"
		placeholder="search posts, authors..."
	/>
</div>
