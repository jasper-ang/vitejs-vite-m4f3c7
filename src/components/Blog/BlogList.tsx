import React from 'react'
import { Blog } from '../../hooks/useBlogs'
import './BlogList.css' // Import your CSS for styling

interface BlogListProps {
  blogs: Blog[]
  onDelete: (id: string) => void
  onEdit: (blog: Blog) => void
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onDelete, onEdit }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-entry">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => onEdit(blog)}>Edit</button>
          <button onClick={() => blog._id && onDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList
