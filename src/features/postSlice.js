import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPosts, addPost } from '../Query'

const initialState = {
  posts: [],
  status: 'idle',
  error: '',
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await getAllPosts()
  console.log('-----RES----:' + response)
  return response
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (data, { dispatch }) => {
    const response = await addPost(data)
    console.log(response)
    dispatch(postAdded(response))
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.posts = [...state.posts, action.payload]
    },
    postUpdated: () => {},
    postDeleted: () => {},
    changeStatus: () => {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle'
        // Add any fetched posts to the array
        // console.log(action)
        if (action.payload) state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { postAdded, postUpdated, postDeleted } = postSlice.actions

export default postSlice.reducer

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === parseInt(postId))
