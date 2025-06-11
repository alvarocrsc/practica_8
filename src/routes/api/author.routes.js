const { getAll, getById, create, edit, remove } = require('../../controllers/author.controller');
const { getByAuthorId } = require('../../controllers/post.controller');

const router = require('express').Router();

// Define your routes here
router.get('/', getAll);
router.get('/:id', getById);
router.get('/:id/posts', getByAuthorId);

router.post('/', create);

router.put('/:id', edit);

router.delete('/:id', remove);

module.exports = router;