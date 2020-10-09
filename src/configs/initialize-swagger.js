const swaggerJSDoc = require("swagger-jsdoc");
const fs = require("fs");

const FILE_LOCATION = "public/swagger-doc.json";

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    components: {},
    info: {
      title: "NextJs Swagger Setup Example",
      version: "1.0.0",
      description: "This is an example of setting up swagger",
    },
    host: "localhost:3000",
    basePath: "/api",
    securityDefinitions: {
      apiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "Bearer <JWT-TOKEN>",
      },
    },
    security: [{ apiKeyAuth: [] }],
  },
  apis: ["./src/pages/api/**/*.ts"],
});

const swaggerJson = JSON.stringify(swaggerSpec, null, 4);

fs.writeFile(FILE_LOCATION, swaggerJson, function (err) {
  if (err) throw err;
  console.log(`Swagger file saved into ${FILE_LOCATION}`);
});
