const { dataSinglePackages } = require('../examples/packages/packages.example');

const swaggerOptions = {
  openapi: '3.0.0',
};
const swaggerAutogen = require('swagger-autogen')(swaggerOptions);
const swaggerDoc = {
  info: {
    version: "1.0.0",
    title: "Mileapp",
  },
  host: "localhost:3000",
  basePath: "/packages/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    CreatePackages: dataSinglePackages,
    DeletePackages: {
      status: true,
      statusCode: 200,
      data: {
        acknowledged: true,
        deletedCount: 1
      }
    },
    Error: {
      status: false,
      statusCode: 500,
      error: "Error message"
    }
  }
};
(async () => {
  try {
    const outputSwagger = './swagger.json';
    const endpointsFiles = ['../src/**/routes/*.js'];
    await swaggerAutogen(outputSwagger, endpointsFiles, swaggerDoc);
  } catch (error) {
    console.log(error.message);
  }
})();