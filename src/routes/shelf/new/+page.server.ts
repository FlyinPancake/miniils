import type { Actions } from './$types';
import { error } from '@sveltejs/kit';

export const actions: Actions = {
	add_shelf: async ({ locals, request }) => {
		if (!locals.user) throw error(401, 'Unauthorized');

		const body = await request.formData();
		const name = body.get('name') as string;
		locals.pb.collection('shelves').create({
			name: name,
			owner: locals.user.id
		});
	}
};
