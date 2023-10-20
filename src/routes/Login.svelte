<script>
	import { Modal } from '@svelteuidev/core';
	import Login from '$components/Login.svelte';

	export let opened = true;
	export let closeModal = () => (opened = false);
</script>

<Modal {opened} on:close={closeModal} title="Log in!" centered size={'lg'}>
	<Login onCancel={closeModal} />
</Modal>
