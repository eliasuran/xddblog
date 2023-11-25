<script lang="ts">
	import { apiUrl } from '$lib/host';
	import Icon from '@iconify/svelte';

	export let toggleRegister: () => void;
	const handleClick = () => {
		toggleRegister();
	};

	const inputStyle = 'bg-transparent rounded-md border border-secondary p-2';

	let username: string = '';
	let password: string = '';
	let confirmPassword: string = '';

	const onSubmit = async () => {
		if (confirmPassword === password) {
			if (username && password) {
				const res = await fetch(
					`${apiUrl}:3250/register?username=${username}&password=${password}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						}
					}
				);
				if (res.status === 200) {
					console.log(await res.json());
					window.location.reload;
				} else {
					console.log(await res.json());
				}
			} else {
				console.log('Username and password is required');
			}
		} else {
			console.log('Passwords dont match');
		}
	};
</script>

<form
	on:submit={onSubmit}
	class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 bg-primary rounded-md border border-secondary z-50 flex flex-col gap-4 p-8"
>
	<div class="flex justify-between">
		<h1 class="text-2xl">Register</h1>
		<button on:click={handleClick}><Icon height="30" icon="ph:x" /></button>
	</div>
	<h2>Username</h2>
	<input bind:value={username} type="text" class={inputStyle} />
	<h2>Password</h2>
	<input bind:value={password} type="password" class={inputStyle} />
	<h2>Confirm Password</h2>
	<input bind:value={confirmPassword} type="password" class={inputStyle} />
	<button type="submit" class={`${inputStyle} self-start`}>Register</button>
</form>
