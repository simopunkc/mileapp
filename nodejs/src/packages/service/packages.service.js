module.exports = (repository) => ({
  getListPackages: async () => {
    try {
      const data = await repository.getListPackages();
      return {
        status: true,
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        status: false,
        statusCode: 500,
        error: error.message,
      };
    }
  },
  getSinglePackage: async (id) => {
    try {
      const data = await repository.getSinglePackage(id);
      if (!data) {
        return {
          status: false,
          statusCode: 404,
          error: 'Package not found',
        };
      }
      return {
        status: true,
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        status: false,
        statusCode: 500,
        error: error.message,
      };
    }
  },
  createSinglePackage: async (body) => {
    try {
      const data = await repository.createSinglePackage(body);
      if (!data) {
        return {
          status: false,
          statusCode: 400,
          error: 'Package data is not valid',
        };
      }
      return {
        status: true,
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        status: false,
        statusCode: 500,
        error: error.message,
      };
    }
  },
  replaceSinglePackage: async (id, body) => {
    try {
      const data = await repository.replaceSinglePackage(id, body);
      if (!data) {
        return {
          status: false,
          statusCode: 404,
          error: 'Package not found',
        };
      }
      return {
        status: true,
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        status: false,
        statusCode: 500,
        error: error.message,
      };
    }
  },
  updateSinglePackage: async (id, body) => {
    try {
      const data = await repository.updateSinglePackage(id, body);
      if (!data) {
        return {
          status: false,
          statusCode: 404,
          error: 'Package not found',
        };
      }
      return {
        status: true,
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        status: false,
        statusCode: 500,
        error: error.message,
      };
    }
  },
  removeSinglePackage: async (id) => {
    try {
      const data = await repository.removeSinglePackage(id);
      if (!data) {
        return {
          status: false,
          statusCode: 404,
          error: 'Package not found',
        };
      }
      return {
        status: true,
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        status: false,
        statusCode: 500,
        error: error.message,
      };
    }
  },
});