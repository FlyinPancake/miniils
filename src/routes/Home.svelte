<script lang="ts">
	import type { User } from '$lib/data/user';

	export let user: User;
</script>

<p>Welcome, {user.name}!</p>
