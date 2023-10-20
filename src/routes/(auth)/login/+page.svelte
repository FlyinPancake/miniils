<script>
	import { Stack } from '@svelteuidev/core';
	import Login from '$components/Login.svelte';
	import { goto } from '$app/navigation';
</script>

<Stack align="center">
	<Login onCancel={() => goto('/')} />
</Stack>
