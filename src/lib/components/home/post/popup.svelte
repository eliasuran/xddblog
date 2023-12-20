<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<div
	transition:slide={{ duration: 300, axis: 'y' }}
	class="w-full h-20 grid place-items-center bg-xdd rounded-b-lg absolute left-0 bottom-0 duration-300 translate-y-full"
>
	Click to read!
</div>
