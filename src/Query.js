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

export const registerAccount = async data => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/register/`, data)
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const loginAccount = async data => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login/`, data)
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const addPost = async data => {
  try {
    console.log(data)
    const res = await axios.post(`${BASE_URL}/posts/new/`, data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async () => {}

export const updatePost = async () => {}
