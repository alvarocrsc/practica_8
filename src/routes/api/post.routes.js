const { getAll, getById, create, edit, remove } = require('../../controllers/post.controller');
const router = require('express').Router();

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', create);

router.put('/:id', edit);

router.delete('/:id', remove);

module.exports = router;