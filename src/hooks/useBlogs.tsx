import { useState, useEffect } from 'react'
import * as Realm from 'realm-web'

// Define the Blog interface
export interface Blog {
  _id?: string
  title: string
  content: string
}

const app = new Realm.App({
  id: 'mongodb+srv://jasperang:Jasper00))@blogv1.wfkueom.mongodb.net/',
})

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Function to get the MongoDB collection
  const getCollection = async () => {
    const credentials = Realm.Credentials.anonymous()
    try {
      const user = await app.logIn(credentials)
      const mongo = user.mongoClient('mongodb-atlas')
      return mongo
        .db(process.env.REACT_APP_DATABASE_NAME!)
        .collection('firstseries')
    } catch (err) {
      setError('Failed to log in and get collection')
      console.error('Error:', err)
      throw err
    }
  }

  // Function to fetch blogs
  const fetchBlogs = async () => {
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

  // Initial fetch of blogs
  useEffect(() => {
    fetchBlogs()
  }, [])

  // Return the blog data and CRUD functions
  return { blogs, loading, error, createBlog, updateBlog, deleteBlog }
}

export default useBlogs
