<script lang="ts">
	import type { PageServerData } from './$types';
	import Home from './Home.svelte';
	import Landing from './Landing.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if data.user}
	<Home user={data.user} />
{:else}
	<Landing />
{/if}
