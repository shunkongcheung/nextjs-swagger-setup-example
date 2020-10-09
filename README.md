# NextJs Swagger Setup Example

- Setup Typescript with NextJs
- Create simple pages
- Setup api with swagger


## Getting Started

Development environment is served at [http://localhost:3000](http://localhost:3000).

To start up, run `yarn dev`.

To update Swagger info, amend `src/configs/initialize-swagger.js`.

To generate `public/swagger-doc.json`, run `yarn swagger`.

To view `swagger` documentation, hit [http://localhost:3000/docs](http://localhost:3000/docs)


## Description

Swagger Spec is generated with `swagger-jsdoc`.

A JSON file [swagger-doc.json](public/swagger-doc.json) after `yarn swagger` is executed.

Swagger is served by NextJS at [/docs](src/pages/docs.tsx).


## Recreate Example

### NextJS Setup
For more info, visit [here](https://nextjs.org/docs/api-reference/create-next-app).

1. Create next application with `npx create-next-app .`. 
2. Move source into `src` directory

### Typescript Setup
For more info, visit [here](https://nextjs.org/docs/basic-features/typescript).

1. Add `tsconfig.json`
2. Install `typescript` by `yarn add -D typescript @types/node @types/react`. 
3. Startup development server, `next` will initialize `tsconfig.json` and generate `next-env.d.ts` by default.
4. Rename file to `ts` / `tsx`. Add typing to respective files.

### Swagger Setup
For more info, visit [here](https://www.npmjs.com/package/swagger-jsdoc).

1. Install swagger by `yarn add swagger-jsdoc`
2. Create `initialize-swagger.js` and add command to `package.json`
3. Write your swagger comments

### Swagger UI Setup
For more info, visit [here](https://www.npmjs.com/package/swagger-ui-react).

1. Insall `swagger-ui` by `yarn add swagger-ui-react`, `yarn add -D @types/swagger-ui-react`. 
2. Create `pages/docs`.
