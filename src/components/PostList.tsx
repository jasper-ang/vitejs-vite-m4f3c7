import React, { useEffect, useState } from 'react'
import api from '../services/api'
import PostItem from './PostItem'

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PostList
