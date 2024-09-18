# Running the project

`npm i`
`npm run dev`
`npm run frog-dev` -> to preview contests

## Stack

- Next for API and UI
- Hono for API
- Zod for validation
- Shadcn for UI/UX
- Vercel for Postgres DB and deploys
- Prisma for ORM
- Frog for frames

## Pages

`/` -> to create new contests. No auth for now.

Initially the goal was to create a full dashboard where you can sign-in using your Farcaster Account to create you own contests and even change the way they look. Unfortunately I was not able to get Farcaster's AuthKit to work with Next 14, so we only have the creation page for now.

## Project structure

### API

- /lib/api/routes contains all of the api routes. this includes the ones that create the form
- /lib/api/schemas includes the schemas needed for creating the contests. i even made filtering schemas so that we could filter by creation date and etc. but this didn't work without auth.
- /lib/api/db prisma db instance
- /lib/api/client hono rpc client

## Components

- /components/ui shadcn generated ui components
- /components/feat has all of the feature components
- /components/layout layout components
