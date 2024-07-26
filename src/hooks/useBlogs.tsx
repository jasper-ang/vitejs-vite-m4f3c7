import { useState, useEffect } from 'react'
import * as Realm from 'realm-web'

// Define the Blog interface
export interface Blog {
  _id?: string
  title: string
  content: string
}

// Initialize the Realm app with the App ID from environment variables
const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID! })

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Function to get the MongoDB collection
  const getCollection = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous())
    const mongo = user.mongoClient('mongodb-atlas')
    return mongo.db('your-database-name').collection('blogs')
  }

  // Fetch blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      try {
        const collection = await getCollection()
        const result = await collection.find({})
        setBlogs(result)
      } catch (err) {
        setError('Failed to fetch blogs')
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  // Function to create a blog
  const createBlog = async (blog: Blog) => {
    try {
      const collection = await getCollection()
      const result = await collection.insertOne(blog)
      setBlogs([...blogs, { ...blog, _id: result.insertedId }])
    } catch (err) {
      setError('Failed to create blog')
    }
  }

  // Function to update a blog
  const updateBlog = async (id: string, updatedBlog: Blog) => {
    try {
      const collection = await getCollection()
      await collection.updateOne(
        { _id: new Realm.BSON.ObjectId(id) },
        { $set: updatedBlog }
      )
      setBlogs(
        blogs.map((blog) =>
          blog._id === id ? { ...updatedBlog, _id: id } : blog
        )
      )
    } catch (err) {
      setError('Failed to update blog')
    }
  }

  // Function to delete a blog
  const deleteBlog = async (id: string) => {
    try {
      const collection = await getCollection()
      await collection.deleteOne({ _id: new Realm.BSON.ObjectId(id) })
      setBlogs(blogs.filter((blog) => blog._id !== id))
    } catch (err) {
      setError('Failed to delete blog')
    }
  }

  // Return the blog data and CRUD functions
  return { blogs, loading, error, createBlog, updateBlog, deleteBlog }
}

export default useBlogs
