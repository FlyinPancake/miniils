<script>
	import { ActionIcon } from '@svelteuidev/core';
	import { Moon, Sun } from 'radix-icons-svelte';
	import { writable } from 'svelte/store';
	export let isDark = writable(false);
	export let toggleTheme = () => {
		$isDark = !isDark;
	};
</script>

<ActionIcon on:click={toggleTheme}>
	{#if $isDark}
		<Moon />
	{:else}
		<Sun />
	{/if}
</ActionIcon>
