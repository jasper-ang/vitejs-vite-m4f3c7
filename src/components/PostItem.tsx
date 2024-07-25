import React from 'react'

interface PostProps {
  post: {
    title: string
    body: string
    author: string
    publishDate: string
  }
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <strong>{post.author}</strong>
      </p>
      <p>{new Date(post.publishDate).toLocaleString()}</p>
    </div>
  )
}

export default PostItem
