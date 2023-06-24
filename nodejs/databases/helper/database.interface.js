class DatabaseInterface {
  async connectToDatabase() {
    throw new Error('Not implemented');
  }

  async getConnectionDatabase() {
    throw new Error('Not implemented');
  }
}

module.exports = DatabaseInterface;