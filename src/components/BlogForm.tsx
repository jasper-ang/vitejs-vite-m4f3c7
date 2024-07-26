import React, { useState, useEffect } from 'react'
import { Blog } from '../hooks/useBlogs'

interface BlogFormProps {
  initialBlog?: Blog
  onSave: (blog: Blog) => void
}

const BlogForm: React.FC<BlogFormProps> = ({ initialBlog, onSave }) => {
  const [blog, setBlog] = useState<Blog>({ id: '', title: '', content: '' })

  useEffect(() => {
    if (initialBlog) {
      setBlog(initialBlog)
    }
  }, [initialBlog])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!blog.id) {
      blog.id = Math.random().toString(36).substr(2, 9) // generate a simple unique id
    }
    onSave(blog)
    setBlog({ id: '', title: '', content: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={blog.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={blog.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default BlogForm
