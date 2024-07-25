import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/api/posts`)
  return response.data
}

export const createPost = async (post: any) => {
  const response = await axios.post(`${API_URL}/api/posts`, post)
  return response.data
}
