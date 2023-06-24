require('dotenv').config();
const mongoose = require('mongoose');
const { env } = process;
const DatabaseInterface = require('../helper/database.interface');

class DatabaseMongoDb extends DatabaseInterface {
  async connectToDatabase() {
    this.database = await mongoose.connect(env.MONGODB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async getConnectionDatabase() {
    try {
      if (this.database == null) {
        await this.connectToDatabase();
      }
      const packages = require('../../models/mongodb/mongodb.packages.model')(this.database);
      return {
        packages: packages,
      };
    } catch (err) {
      return {
        packages: {},
      };
    }
  }
}

module.exports = DatabaseMongoDb;