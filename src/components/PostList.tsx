import React from 'react'
import PostItem from './PostItem'

interface PostListProps {
  posts: {
    _id: string
    title: string
    body: string
    author: string
    publishDate: string
  }[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PostList
