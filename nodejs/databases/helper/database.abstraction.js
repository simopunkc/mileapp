const databaseIdentifier = require('./database.identifier');
const DatabaseMongoDb = require('../mongodb/mongodb.database');

class DatabaseAbstraction {
  setModel(key, value) {
    if (!this.model) {
      this.model = new Map();
    }
    if (!this.model?.has(key)) {
      this.model?.set(key, value);
    }
  }

  getModel(key) {
    return this.model?.get(key) ?? null;
  }
}

const dbAbstractConnection = async () => {
  const identifier = databaseIdentifier.MONGODB;
  const dbAbstract = new DatabaseAbstraction();
  if (!dbAbstract.getModel(identifier)) {
    if (identifier === databaseIdentifier.MONGODB) {
      const dbObject = new DatabaseMongoDb();
      const database = await dbObject.getConnectionDatabase();
      dbAbstract.setModel(identifier, database);
    }
  }
  return dbAbstract.getModel(identifier);
};

module.exports = {
  dbAbstractConnection,
};