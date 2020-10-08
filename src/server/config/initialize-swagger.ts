import swaggerJSDoc from 'swagger-jsdoc'

interface InitializeSwaggerProps {
  host: string
  apiPath: string
  version: string
}

const initializeSwagger = ({ host, apiPath, version }: InitializeSwaggerProps) => {
  const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
      components: {},
      info: {
        title:'NextJs Swagger Setup Example',
        version,
        description: "swagger description"
      },
      host,
      basePath: apiPath,
      securityDefinitions: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer <JWT-TOKEN>'
        }
      },
      security: [{ apiKeyAuth: [] }]
    },
    apis: [
      './src/pages/api/**/*.ts',
    ]
  })

  return swaggerSpec
}

export default initializeSwagger
