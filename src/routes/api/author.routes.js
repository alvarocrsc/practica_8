const { getAll, getById, create } = require('../../controllers/author.controller');
const { getByAuthorId } = require('../../controllers/post.controller');

const router = require('express').Router();

// Define your routes here
router.get('/', getAll);
router.get('/:id', getById);
router.get('/:id/posts', getByAuthorId);

router.post('/', create);

module.exports = router;