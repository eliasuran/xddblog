<script lang="ts">
	import '../app.postcss';
	import Lightswitch from '../components/lightswitch.svelte';
</script>

<div class="flex flex-col">
	<nav
		class="h-20 w-screen dark:text-text text-textLight fixed dark:bg-primary bg-primaryLight border-b dark:border-secondary border-secondaryLight flex justify-around p-8"
	>
		<a href="/">hel</a>
		<Lightswitch />
	</nav>
	<slot />
</div>
