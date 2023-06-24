require('dotenv').config();
const { env } = process;
const app = require("./server");
const PORT = env.PORT || 3000;

module.exports = app.listen(PORT);