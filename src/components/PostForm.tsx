import React, { useState } from 'react'
import { createPost } from '../services/api'

const PostForm = ({ refreshPosts }: { refreshPosts: Function }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newPost = { title, body, author }
    await createPost(newPost)
    setTitle('')
    setBody('')
    setAuthor('')
    refreshPosts()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  )
}

export default PostForm
