import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../services/api'
import PostList from '../Frontend/assets/components/PostList'
import PostForm from '../Frontend/assets/components/PostForm'

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([])

  const refreshPosts = async () => {
    const allPosts = await fetchPosts()
    setPosts(allPosts)
  }

  useEffect(() => {
    refreshPosts()
  }, [])

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <PostForm refreshPosts={refreshPosts} />
      <PostList posts={posts} />
    </div>
  )
}

export default Blog
