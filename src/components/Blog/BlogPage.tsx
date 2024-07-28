import React, { useState } from 'react'
import useBlogs, { Blog } from '../../hooks/useBlogs'
import BlogList from '../Blog/BlogList'
import BlogForm from '../Blog/BlogForm'

const BlogPage: React.FC = () => {
  const { blogs, createBlog, updateBlog, deleteBlog, loading, error } =
    useBlogs()
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)

  const handleSave = async (blog: Blog) => {
    if (editingBlog) {
      await updateBlog(blog._id!, blog)
    } else {
      await createBlog(blog)
    }
    setEditingBlog(null)
  }

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog)
  }

  const handleDelete = (id: string) => {
    deleteBlog(id)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="blog-page">
      <h1>Blogs</h1>
      <>{JSON.stringify(blogs)}</>
      <BlogForm initialBlog={editingBlog} onSave={handleSave} />
      <BlogList blogs={blogs} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}

export default BlogPage
