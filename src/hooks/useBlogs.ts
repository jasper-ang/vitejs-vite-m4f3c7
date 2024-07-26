import { useState, useEffect } from 'react'

export interface Blog {
  id: string
  title: string
  content: string
}

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const storedBlogs = localStorage.getItem('blogs')
      if (storedBlogs) {
        setBlogs(JSON.parse(storedBlogs))
      }
    } catch (err) {
      setError('Failed to load blogs')
    } finally {
      setLoading(false)
    }
  }, [])

  const saveBlogs = (updatedBlogs: Blog[]) => {
    setBlogs(updatedBlogs)
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
  }

  const createBlog = (blog: Blog) => {
    const newBlogs = [...blogs, blog]
    saveBlogs(newBlogs)
  }

  const updateBlog = (id: string, updatedBlog: Blog) => {
    const newBlogs = blogs.map((blog) => (blog.id === id ? updatedBlog : blog))
    saveBlogs(newBlogs)
  }

  const deleteBlog = (id: string) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    saveBlogs(newBlogs)
  }

  return { blogs, loading, error, createBlog, updateBlog, deleteBlog }
}

export default useBlogs
