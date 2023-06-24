const databaseAbstract = require('../../../databases/helper/database.abstraction');
const repositoryPackages = require('../repository/packages.repository');
const servicePackages = require('../service/packages.service');

const getListPackages = async (req, res) => {
  try {
    const database = await databaseAbstract.dbAbstractConnection();
    const repository = repositoryPackages(database.packages);
    const service = servicePackages(repository);
    const data = await service.getListPackages();
    res.status(data.statusCode).json(data);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
  /*
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/Error" }
        }
      }
    }
  */
};

const getSinglePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const database = await databaseAbstract.dbAbstractConnection();
    const repository = repositoryPackages(database.packages);
    const service = servicePackages(repository);
    const data = await service.getSinglePackage(id);
    res.status(data.statusCode).json(data);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
  /* 
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/Error" }
        }
      }
    }
  */
};

const createSinglePackage = async (req, res) => {
  try {
    const { body } = req;
    const database = await databaseAbstract.dbAbstractConnection();
    const repository = repositoryPackages(database.packages);
    const service = servicePackages(repository);
    const data = await service.createSinglePackage(body);
    res.status(data.statusCode).json(data);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/CreatePackages" }
        }
      }
    }
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/Error" }
        }
      }
    }
  */
};

const replaceSinglePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const database = await databaseAbstract.dbAbstractConnection();
    const repository = repositoryPackages(database.packages);
    const service = servicePackages(repository);
    const data = await service.replaceSinglePackage(id, body);
    res.status(data.statusCode).json(data);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/CreatePackages" }
        }
      }
    }
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/Error" }
        }
      }
    }
  */
};

const updateSinglePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const database = await databaseAbstract.dbAbstractConnection();
    const repository = repositoryPackages(database.packages);
    const service = servicePackages(repository);
    const data = await service.updateSinglePackage(id, body);
    res.status(data.statusCode).json(data);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/CreatePackages" }
        }
      }
    }
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/Error" }
        }
      }
    }
  */
};

const removeSinglePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const database = await databaseAbstract.dbAbstractConnection();
    const repository = repositoryPackages(database.packages);
    const service = servicePackages(repository);
    const data = await service.removeSinglePackage(id);
    res.status(data.statusCode).json(data);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
  /* #swagger.responses[200] = {
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/DeletePackages" }
        }
      }
    }
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/Error" }
        }
      }
    }
  */
};

module.exports = {
  getListPackages,
  getSinglePackage,
  createSinglePackage,
  replaceSinglePackage,
  updateSinglePackage,
  removeSinglePackage,
};