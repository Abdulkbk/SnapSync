import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerAccount, loginAccount } from '../Query'

const initialState = {
  data: {},
  status: 'idle',
  error: '',
}

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { dispatch }) => {
    console.log(data)
    const response = await registerAccount(data)
    dispatch(register(response))
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { dispatch }) => {
    console.log(data)
    const response = await loginAccount(data)
    dispatch(login(response))
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.data = action.payload
    },
    login: (state, action) => {
      if (action.payload.access) {
        state.data = action.payload
      } else {
        console.log(action)
      }
    },
    logout: state => {
      state.data = {}
    },
  },
})

export const { register, login, logout } = userSlice.actions

export default userSlice.reducer
