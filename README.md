# miniils

MiniILS is a small, simple, and fast ILS (Integrated Library System) for individuals with an above average book collection.
It is designed to be easy to use and easy to deploy. It is written in SvelteKit and uses pocketbase for its database.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
