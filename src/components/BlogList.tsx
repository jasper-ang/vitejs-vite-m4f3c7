import React from 'react'
import { Blog } from '../hooks/useBlogs'

interface BlogListProps {
  blogs: Blog[]
  onDelete: (id: string) => void
  onEdit: (blog: Blog) => void
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onDelete, onEdit }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => onEdit(blog)}>Edit</button>
          <button onClick={() => onDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList
