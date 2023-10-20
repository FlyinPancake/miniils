<script lang="ts">
	import {
		colorScheme,
		SvelteUIProvider,
		Text,
		AppShell,
		Header,
		Group,
		Button
	} from '@svelteuidev/core';
	import type { LayoutServerData } from './$types';
	import Login from './Login.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	const isDark = writable(false);
	onMount(() => {
		$isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	function toggleTheme() {
		$isDark = !$isDark;
	}

	$: {
		if ($isDark) {
			$colorScheme = 'dark';
		} else {
			$colorScheme = 'light';
		}
	}

	let loginModalOpened = false;
	function openLoginModal() {
		loginModalOpened = true;
	}

	export let data: LayoutServerData;
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={$colorScheme}>
	<AppShell override={{ padding: '0px' }} height="100%" class="app-shell h-full flex flex-col">
		<Header height="40px">
			<Group position="apart">
				<Text>miniILS</Text>
				<Group>
					<ThemeSwitcher {isDark} {toggleTheme} />
					{#if data.user}
						<Button href="/logout">Logout</Button>
					{:else}
						<Button on:click={openLoginModal}>Login</Button>
					{/if}
				</Group>
			</Group>
		</Header>
		<slot class="container flex-grow" />
		<Login bind:opened={loginModalOpened} />
	</AppShell>
</SvelteUIProvider>

<style global>
	main {
		padding: 0px;
	}
</style>
