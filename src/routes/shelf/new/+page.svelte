<script>
	import { Stack, Button, Space, Group, TextInput } from '@svelteuidev/core';

	let shelfName = '';
</script>

<center>
	<h2>Create a new Shelf</h2>
	<p>In miniILS you organize books by assigning them to shelves</p>
</center>

<Group position="center" width="50%" grow>
	<form action="?/add_shelf" method="post">
		<TextInput bind:value={shelfName} label="Shelf Name" placeholder="i.e.: Study bookshelf" />
		<input type="hidden" name="shelfName" id="shelfName" bind:value={shelfName} />
		<Space h="md" />
		<center>
			<Button fullSize>Add Shelf</Button>
		</center>
	</form>
</Group>
