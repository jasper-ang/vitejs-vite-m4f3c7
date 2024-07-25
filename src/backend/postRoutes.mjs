import express from 'express'
import {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} from './postController.mjs'

const router = express.Router()

// Define your routes here
router.route('/posts').get(getPosts).post(createPost)
router.route('/posts/:id').get(getPost).put(updatePost).delete(deletePost)

export default router
