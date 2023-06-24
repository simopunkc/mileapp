const router = require('express').Router();

const {
  getListPackages,
  getSinglePackage,
  createSinglePackage,
  replaceSinglePackage,
  updateSinglePackage,
  removeSinglePackage,
} = require('../handler/packages.handler');

router.get('/', getListPackages);
router.get('/:id', getSinglePackage);
router.post('/', createSinglePackage);
router.put('/:id', replaceSinglePackage);
router.patch('/:id', updateSinglePackage);
router.delete('/:id', removeSinglePackage);

module.exports = router;