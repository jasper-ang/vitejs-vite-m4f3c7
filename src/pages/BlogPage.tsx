import React, { useState } from 'react'
import useBlogs, { Blog } from '../hooks/useBlogs'
import BlogList from '../components/BlogList'
import BlogForm from '../components/BlogForm'

const BlogPage: React.FC = () => {
  const { blogs, createBlog, updateBlog, deleteBlog } = useBlogs()
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)

  const handleSave = (blog: Blog) => {
    if (editingBlog) {
      updateBlog(blog._id!, blog)
    } else {
      createBlog(blog)
    }
    setEditingBlog(null)
  }

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog)
  }

  const handleDelete = (id: string) => {
    deleteBlog(id)
  }

  return (
    <div>
      <h1>Blogs</h1>
      <BlogForm initialBlog={editingBlog} onSave={handleSave} />
      <BlogList blogs={blogs} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}

export default BlogPage
