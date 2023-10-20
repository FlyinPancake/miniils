<script lang="ts">
	import { Button, Group, PasswordInput, Space, Stack, TextInput } from '@svelteuidev/core';
	import { enhance } from '$app/forms';
	const email = 'Email';
	const password = 'Password';
	let emailValue = '';
	let passwordValue = '';
	export let onCancel: () => void;
</script>

<form action="/login?/login" method="post" use:enhance>
	<Stack>
		<TextInput bind:value={emailValue} placeholder={email} label={email} />
		<input type="hidden" name="email" id="email" bind:value={emailValue} />
		<PasswordInput bind:value={passwordValue} placeholder={password} label={password} />
		<input type="hidden" name="password" id="password" bind:value={passwordValue} />
	</Stack>
	<Space h="lg" />
	<Group position="right">
		<Button on:click={onCancel} variant="outline">Cancel</Button>
		<Button>Submit</Button>
	</Group>
</form>
