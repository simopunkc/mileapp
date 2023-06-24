const {
  validatePackageId,
  validatePackageCreate,
  validatePackageUpdate,
} = require('./packages.validations');

const middlewareValidatePackageId = () => async (req, res, next) => {
  try {
    const errors = await validatePackageId(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        errors: errors.array(),
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      statusCode: 500,
      error: error.message,
    });
  }
  return next();
};

const middlewareValidatePackageCreate = () => async (req, res, next) => {
  try {
    const errors = await validatePackageCreate(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        errors: errors.array(),
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      statusCode: 500,
      error: error.message,
    });
  }
  return next();
};

const middlewareValidatePackageUpdate = () => async (req, res, next) => {
  try {
    const errors = await validatePackageUpdate(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        errors: errors.array(),
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      statusCode: 500,
      error: error.message,
    });
  }
  return next();
};

module.exports = {
  middlewareValidatePackageId,
  middlewareValidatePackageCreate,
  middlewareValidatePackageUpdate,
};