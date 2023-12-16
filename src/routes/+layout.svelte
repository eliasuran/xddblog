<script lang="ts">
	import '../app.postcss';
	import Lightswitch from '$lib/components/lightswitch.svelte';
	import Register from '$lib/components/register.svelte';
	import Login from '$lib/components/login.svelte';
	import { apiUrl } from '$lib/host';
	import type { PageData } from './$types';
	export let data: PageData;

	let user = data;

	let showRegister = false;
	let showLogin = false;

	const toggleRegister = () => {
		showRegister = !showRegister;
	};
	const toggleLogin = () => {
		showLogin = !showLogin;
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
			window.location.reload();
		}
	};
</script>

<div class="flex flex-col">
	<nav
		class="h-20 w-screen dark:text-text text-textLight fixed dark:bg-primary bg-primaryLight border-b dark:border-secondary border-secondaryLight flex justify-around p-8 z-40"
	>
		<a href="/" class="text-3xl font-bold">home</a>
		<div>Hi, <a class="hover:underline" href={`/users/mpu`}>{user.user_name}</a></div>
		<a href="/posts/2">post</a>
		<Lightswitch />
		{#if user.user_id}
			<button on:click={() => logOut()}>Log Out</button>
		{:else}
			<div class="flex gap-2">
				<button on:click={() => (showRegister = true)}>Register</button>
				/
				<button on:click={() => (showLogin = true)}>Login</button>
			</div>
		{/if}
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
