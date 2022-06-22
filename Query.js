import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000'

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/posts/`)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getPost = async () => {}

export const register = async () => {}

export const login = async () => {}

export const deletePost = async () => {}

export const updatePost = async () => {}
