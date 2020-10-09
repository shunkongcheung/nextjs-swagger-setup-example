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
