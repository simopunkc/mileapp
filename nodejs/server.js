require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const packages = require('./src/packages/routes/packages.route');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/packages', packages);

const swaggerUi = require('swagger-ui-express');
const outputSwagger = './doc/swagger.json';
const swaggerDocument = require(outputSwagger);
const customCss = fs.readFileSync((process.cwd() + "/doc/swagger.css"), 'utf8');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss }));
app.use((req, res) => {
  res.status(404).json({
    status: false,
    statusCode: 404,
    message: 'invalid route',
  });
})

module.exports = app;