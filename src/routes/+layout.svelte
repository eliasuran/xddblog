<script lang="ts">
	import '../app.postcss';
	import Lightswitch from '$lib/components/lightswitch.svelte';
	import Register from '$lib/components/register.svelte';
	import Login from '$lib/components/login.svelte';
	import { apiUrl } from '$lib/host';

	let showRegister = false;
	let showLogin = false;

	const toggleRegister = () => {
		showRegister = !showRegister;
	};
	const toggleLogin = () => {
		showLogin = !showLogin;
	};

	const getSession = async () => {
		const res = await fetch(`${apiUrl}/session`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (res.status === 200) {
			return await res.json();
		} else {
			console.log('No token:', res.status);
			return {};
		}
	};

	const logOut = async () => {
		const res = await fetch(`${apiUrl}/logout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		});
		if (res.status === 200) {
			console.log(await res.json());
		}
	};
</script>

<div class="flex flex-col">
	<nav
		class="h-20 w-screen dark:text-text text-textLight fixed dark:bg-primary bg-primaryLight border-b dark:border-secondary border-secondaryLight flex justify-around p-8 z-40"
	>
		<button on:click={() => getSession()}>hellohello</button>
		<a href="/">home</a>
		<Lightswitch />
		<div class="flex gap-2">
			<button on:click={() => (showRegister = true)}>Register</button>
			/
			<button on:click={() => (showLogin = true)}>Login</button>
		</div>
		<button on:click={() => logOut()}>Log Out</button>
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
