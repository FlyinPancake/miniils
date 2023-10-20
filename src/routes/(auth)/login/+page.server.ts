import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	login: async ({ locals, request }) => {
		const body = await request.formData();
		const email = body.get('email') as string; // TODO: validate email
		const password = body.get('password') as string; // TODO: validate password

		try {
			await locals.pb.collection('users').authWithPassword(email, password);
			if (!locals.pb.authStore.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log(err);
			throw error(401, 'Invalid credentials');
		}

		throw redirect(303, '/');
	}
};
