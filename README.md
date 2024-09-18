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

`/contests/create` -> to create new contests. No auth for now.

Unfortunately I was unable to get Farcaster Auth to work with Next 14, so this works for all users.
I designed the DB in a way that would allow authors to see who voted what, but due to auth not working this was not possible.

## Project structure

### API

- /api/routes contains all of the api routes. this includes the ones that create the form
- /api/schemas includes the schemas needed for creating the contests. i even made filtering schemas so that we could filter by creation date and etc. but this didn't work without auth.
- /api/db prisma db instance
- /api/client hono rpc client

## Components

- /components/ui shadcn generated ui components
- /components/feat has all of the feature components
- /components/layout layout components

