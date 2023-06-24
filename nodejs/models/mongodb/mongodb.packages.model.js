module.exports = (mongo) => {
  let model;
  try {
    model = mongo.model('packages');
  } catch {
    const Schema = mongo.Schema;
    const modelPackages = new Schema({
      value: {
        type: Object,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      updatedAt: {
        type: Date,
        default: Date.now(),
      },
    });
    model = mongo.model('packages', modelPackages);
  }
  return model;
};