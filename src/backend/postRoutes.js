const express = require('express')
const router = express.Router()
const postController = require('./postController')

// Define your routes here
router
  .route('/posts')
  .get(postController.getPosts)
  .post(postController.createPost)
router
  .route('/posts/:id')
  .get(postController.getPost)
  .put(postController.updatePost)
  .delete(postController.deletePost)

module.exports = router
