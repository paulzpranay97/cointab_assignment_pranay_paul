

const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

router.get('/:userId', PostController.getPostsByUserId);
router.post('/bulk-add/:userId', PostController.bulkAddPosts);

module.exports = router;
