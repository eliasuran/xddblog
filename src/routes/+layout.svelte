<script lang="ts">
	import '../app.postcss';
	import Lightswitch from '$lib/components/lightswitch.svelte';
	import Register from '$lib/components/register.svelte';
	import Login from '$lib/components/login.svelte';

	let showRegister = false;
	let showLogin = false;

	const toggleRegister = () => {
		showRegister = !showRegister;
	};
	const toggleLogin = () => {
		showLogin = !showLogin;
	};
</script>

<div class="flex flex-col">
	<nav
		class="h-20 w-screen dark:text-text text-textLight fixed dark:bg-primary bg-primaryLight border-b dark:border-secondary border-secondaryLight flex justify-around p-8 z-40"
	>
		<a href="/">home</a>
		<Lightswitch />
		<div class="flex gap-2">
			<button on:click={() => (showRegister = true)}>Register</button>
			/
			<button on:click={() => (showLogin = true)}>Login</button>
		</div>
	</nav>
	<slot />
</div>

{#if showRegister}
	<Register {toggleRegister} />
	<button
		on:click={toggleRegister}
		class="absolute inset-0 dark:bg-bg/70 bg-bgLight/70 backdrop-blur z-40 overflow-hidden cursor-auto"
	/>
{/if}
{#if showLogin}
	<Login {toggleLogin} />
	<button
		on:click={toggleLogin}
		class="absolute inset-0 dark:bg-bg/70 bg-bgLight/70 backdrop-blur z-40 overflow-hidden cursor-auto"
	/>
{/if}
