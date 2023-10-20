import PocketBase from 'pocketbase';
import { POCKETBASE_URL } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	event.locals.pb.authStore.model;

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = null;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
