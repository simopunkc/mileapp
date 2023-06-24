const sinon = require("sinon");
const repositoryPackages = require('../../../src/packages/repository/packages.repository');
const servicePackages = require('../../../src/packages/service/packages.service');
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
const service = servicePackages(repository);
const dataAllPackages = [dataSinglePackages];
const mockObjectId = 1234;

describe("Api packages", () => {
  describe("GET /packages/", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("200 ok", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("find").once().withArgs(sinon.match.any).resolves(dataAllPackages);
      const packages = await service.getListPackages();
      expect(packages.status).toEqual(true);
      expect(packages.statusCode).toEqual(200);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 500", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("find").once().withArgs(sinon.match.any).rejects(new Error("network"));
      const packages = await service.getListPackages();
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(500);
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("GET /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("200 ok", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("findOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await service.getSinglePackage(mockObjectId);
      expect(packages.status).toEqual(true);
      expect(packages.statusCode).toEqual(200);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 404", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("findOne").once().withArgs(sinon.match.any).resolves(null);
      const packages = await service.getSinglePackage(mockObjectId);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(404);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 500", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("findOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      const packages = await service.getSinglePackage(mockObjectId);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(500);
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("POST /packages/", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("201 created", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("create").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await service.createSinglePackage(dataSinglePackages);
      expect(packages.status).toEqual(true);
      expect(packages.statusCode).toEqual(201);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 400", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("create").once().withArgs(sinon.match.any).resolves(null);
      const packages = await service.createSinglePackage(mockObjectId);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(400);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 500", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("create").once().withArgs(sinon.match.any).rejects(new Error("network"));
      const packages = await service.createSinglePackage(dataSinglePackages);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(500);
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("PUT /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("200 ok", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("replaceOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await service.replaceSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages.status).toEqual(true);
      expect(packages.statusCode).toEqual(200);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 404", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("replaceOne").once().withArgs(sinon.match.any).resolves(null);
      const packages = await service.replaceSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(404);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 500", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("replaceOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      const packages = await service.replaceSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(500);
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("PATCH /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("200 ok", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("updateOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await service.updateSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages.status).toEqual(true);
      expect(packages.statusCode).toEqual(200);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 404", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("updateOne").once().withArgs(sinon.match.any).resolves(null);
      const packages = await service.updateSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(404);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 500", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("updateOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      const packages = await service.updateSinglePackage(mockObjectId, dataSinglePackages);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(500);
      mockDb.verify();
      mockDb.restore();
    });
  });

  describe("DELETE /packages/:id", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("200 ok", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("deleteOne").once().withArgs(sinon.match.any).resolves(dataSinglePackages);
      const packages = await service.removeSinglePackage(mockObjectId);
      expect(packages.status).toEqual(true);
      expect(packages.statusCode).toEqual(200);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 404", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("deleteOne").once().withArgs(sinon.match.any).resolves(null);
      const packages = await service.removeSinglePackage(mockObjectId);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(404);
      mockDb.verify();
      mockDb.restore();
    });
    it("error 500", async () => {
      let mockDb = sinon.mock(dbPackagesMock);
      mockDb.expects("deleteOne").once().withArgs(sinon.match.any).rejects(new Error("network"));
      const packages = await service.removeSinglePackage(mockObjectId);
      expect(packages.status).toEqual(false);
      expect(packages.statusCode).toEqual(500);
      mockDb.verify();
      mockDb.restore();
    });
  });
});