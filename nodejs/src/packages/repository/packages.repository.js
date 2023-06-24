module.exports = (database) => ({
  getListPackages: () => {
    return new Promise((resolve, reject) => {
      database.find({}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  getSinglePackage: (objectId) => {
    return new Promise((resolve, reject) => {
      database.findOne({
        _id: objectId,
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  createSinglePackage: (objectNew) => {
    return new Promise((resolve, reject) => {
      database.create({
        value: objectNew,
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  replaceSinglePackage: (objectId, objectReplacement) => {
    return new Promise((resolve, reject) => {
      database.replaceOne({
        _id: objectId,
      }, {
        value: objectReplacement,
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  updateSinglePackage: (objectId, objectUpdate) => {
    return new Promise((resolve, reject) => {
      database.updateOne({
        _id: objectId,
      }, {
        value: objectUpdate,
        updatedAt: Date.now(),
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  removeSinglePackage: (objectId) => {
    return new Promise((resolve, reject) => {
      database.deleteOne({
        _id: objectId,
      }).then((res) => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
});