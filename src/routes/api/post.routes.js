const { getAll, getById, create } = require('../../controllers/post.controller');
const router = require('express').Router();

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', create);

module.exports = router;