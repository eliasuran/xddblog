<script lang="ts">
	import { apiUrl } from '$lib/host';
	import Icon from '@iconify/svelte';

	export let toggleRegister: () => void;
	const handleClick = () => {
		toggleRegister();
	};

	const inputStyle =
		'bg-transparent rounded-md border dark:border-secondary border-secondaryLight p-2';

	let username: string = '';
	let password: string = '';
	let confirmPassword: string = '';

	let usernameError: string = '';
	let passwordError: string = '';
	let confirmPasswordError: string = '';

	const onSubmit = async () => {
		usernameError = '';
		passwordError = '';
		confirmPasswordError = '';
		if (confirmPassword === password) {
			if (username && password.length >= 8) {
				const res = await fetch(`${apiUrl}/register`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				});
				if (res.status === 200) {
					console.log(await res.json());
					window.location.reload();
				} else {
					const data = await res.json();
					usernameError = data.error; // add more error handling as it is discovered
				}
			} else {
				if (!username) {
					usernameError = 'Username is required';
				} else {
					passwordError = 'Password must be at least 8 characters';
				}
			}
		} else {
			confirmPasswordError = 'Passwords dont match';
		}
	};
</script>

<form
	on:submit={onSubmit}
	class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 dark:bg-primary bg-primaryLight rounded-md border dark:border-secondary border-secondaryLight z-50 flex flex-col gap-4 p-8"
>
	<div class="flex justify-between">
		<h1 class="text-2xl">Register</h1>
		<button on:click={handleClick}><Icon height="30" icon="ph:x" /></button>
	</div>

	<h2>Username</h2>
	<input bind:value={username} type="text" class={inputStyle} />
	<span class="text-red-800 text-sm">{usernameError}</span>

	<h2>Password</h2>
	<input bind:value={password} type="password" class={inputStyle} />
	<span class="text-red-800 text-sm">{passwordError}</span>

	<h2>Confirm Password</h2>
	<input bind:value={confirmPassword} type="password" class={inputStyle} />
	<span class="text-red-800 text-sm">{confirmPasswordError}</span>

	<button type="submit" class={`${inputStyle} self-start`}>Register</button>
</form>
