<script lang="ts">
	import { TextInput } from '@svelteuidev/core';
	export let value: string;
	export let id: string;
	export let placeholder = '';
	export let label = '';
	export let error = '';
</script>

<TextInput bind:value {placeholder} {label} {error} />
<input type="hidden" name={id} {id} />
