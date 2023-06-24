const router = require('express').Router();
const {
  middlewareValidatePackageId,
  middlewareValidatePackageCreate,
  middlewareValidatePackageUpdate,
} = require('../middleware/packages.middleware');

const {
  getListPackages,
  getSinglePackage,
  createSinglePackage,
  replaceSinglePackage,
  updateSinglePackage,
  removeSinglePackage,
} = require('../handler/packages.handler');

router.get('/', getListPackages);
router.get('/:id', middlewareValidatePackageId, getSinglePackage);
router.post('/', middlewareValidatePackageCreate, createSinglePackage);
router.put('/:id', middlewareValidatePackageUpdate, replaceSinglePackage);
router.patch('/:id', middlewareValidatePackageUpdate, updateSinglePackage);
router.delete('/:id', middlewareValidatePackageId, removeSinglePackage);

module.exports = router;