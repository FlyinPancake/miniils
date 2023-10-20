import type { Actions, PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.pb.authStore.isValid) throw redirect(303, '/');
};

export const actions: Actions = {
	add_shelf: async ({ locals, request }) => {
		if (!locals.pb.authStore.isValid) throw error(401, 'Unauthorized');
		console.log(locals.user);
		const body = await request.formData();
		const name = body.get('shelfName');
		console.log('Name: ', body);
		try {
			await locals.pb.collection('shelves').create({
				name: name,
				owner: locals.user.id
			});
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/shelf');
	}
};
