<script>
	import { Stack, Button, Space, Group } from '@svelteuidev/core';
	import TextInput from '$components/inputs/TextInput.svelte';

	let shelfName = '';
</script>

<center>
	<h2>Create a new Shelf</h2>
	<p>In miniILS you organize books by assigning them to shelves</p>
</center>

<Group position="center" width="50%" grow>
	<form action="?/add_shelf" method="post">
		<TextInput
			bind:value={shelfName}
			id="shelfName"
			label="Shelf Name"
			placeholder="i.e.: Study bookshelf"
		/>
		<Space h="md" />
		<center>
			<Button fullSize>Add Shelf</Button>
		</center>
	</form>
</Group>
