import React, { useState, useEffect } from 'react'
import { Blog } from '../../hooks/useBlogs' // Correct the import path
import './BlogForm.css' // Import your CSS for styling

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
    setBlog((prevBlog: Blog) => ({ ...prevBlog, [name]: value })) // Type the prevBlog parameter
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSave(blog)
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
