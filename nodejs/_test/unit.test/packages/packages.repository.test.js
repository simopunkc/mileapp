const sinon = require("sinon");
const repositoryPackages = require('../../../src/packages/repository/packages.repository');
const { dataSinglePackages } = require('../../../examples/packages/packages.example');

const dbPackagesMock = {
  find: (param) => param,
  findOne: (param, query) => ({ param, query }),
  create: (query) => query,
  replaceOne: (param, query) => ({ param, query }),
  updateOne: (param, query) => ({ param, query }),
  deleteOne: (param) => param,
};
const repository = repositoryPackages(dbPackagesMock);
const dataAllPackages = [dataSinglePackages];
const mockObjectId = 1234;

describe("Api packages", () => {
  describe("GET /packages/", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("resolved", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("find").once().withArgs(sinon.match.any).resolves(dataAllPackages);
      const packages = await repository.getListPackages();
      expect(packages.length).toEqual(1);
      mockDb.verify();
      mockDb.restore();
    });
    it("rejected", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("find").once().withArgs(sinon.match.any).rejects(new Error("network"));
      await repository.getListPackages().catch((error) => {
        expect(error.message).toEqual("network");
      });
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("GET /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("resolved", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("findOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await repository.getSinglePackage(mockObjectId);
      expect(packages).not.toEqual(null);
      mockDb.verify();
      mockDb.restore();
    });
    it("rejected", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("findOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      await repository.getSinglePackage(mockObjectId).catch((error) => {
        expect(error.message).toEqual("network");
      });
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("POST /packages/", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("resolved", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("create").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await repository.createSinglePackage(dataSinglePackages);
      expect(packages).not.toEqual(null);
      mockDb.verify();
      mockDb.restore();
    });
    it("rejected", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("create").once().withArgs(sinon.match.any).rejects(new Error("network"));
      await repository.createSinglePackage(dataSinglePackages).catch((error) => {
        expect(error.message).toEqual("network");
      });
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("PUT /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("resolved", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("replaceOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await repository.replaceSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages).not.toEqual(null);
      mockDb.verify();
      mockDb.restore();
    });
    it("rejected", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("replaceOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      await repository.replaceSinglePackage(mockObjectId, dataSinglePackages).catch((error) => {
        expect(error.message).toEqual("network");
      });
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("PATCH /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("resolved", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("updateOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await repository.updateSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages).not.toEqual(null);
      mockDb.verify();
      mockDb.restore();
    });
    it("rejected", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("updateOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      await repository.updateSinglePackage(mockObjectId, dataSinglePackages).catch((error) => {
        expect(error.message).toEqual("network");
      });
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("DELETE /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("resolved", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("deleteOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await repository.removeSinglePackage(mockObjectId);
      expect(packages).not.toEqual(null);
      mockDb.verify();
      mockDb.restore();
    });
    it("rejected", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("deleteOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      await repository.removeSinglePackage(mockObjectId).catch((error) => {
        expect(error.message).toEqual("network");
      });
      mockDb.verify();
      mockDb.restore();
    });
  });
});