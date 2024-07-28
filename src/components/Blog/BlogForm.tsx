import React, { useState, useEffect } from 'react'
import { Blog } from '../../hooks/useBlogs'
import './BlogForm.css'

interface BlogFormProps {
  initialBlog?: Blog | null
  onSave: (blog: Blog) => void
}

const BlogForm: React.FC<BlogFormProps> = ({ initialBlog, onSave }) => {
  const [blog, setBlog] = useState<Blog>({ _id: '', title: '', content: '' })

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
    onSave(blog)
    setBlog({ _id: '', title: '', content: '' })
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
