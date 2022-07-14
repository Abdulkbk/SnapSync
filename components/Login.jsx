import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../src/features/userSlice'
import { useRouter } from 'next/router'
import { setUser } from '../src/features/userSlice'

export default function () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userData = useSelector(state => state.user.data)

  const router = useRouter()

  const handleLogin = e => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    console.log(user)
    if (user) {
      dispatch(setUser(JSON.parse(user)))
    }
  }, [])

  useEffect(() => {
    if (userData.access) {
      router.push('/home')
    }
  }, [])

  if (userData.access) {
    router.push('/home')
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-gray-100 px-8 py-6 mt-4 text-left bg-gray-100 shadow-lg'>
        <h3 className='text-2xl font-bold text-center text-gray-900'>
          Login to your account
        </h3>
        <form className='' onSubmit={handleLogin}>
          <div className='mt-4'>
            {/* Email field */}
            <div>
              <label className='text-gray-500 text-semibold'>Email</label>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='text'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            {/* Password field */}
            <div className='mt-4'>
              <label className='text-gray-500 text-semibold'>Password</label>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='mt-4 flex items-baseline justify-between'>
              <button
                className='px-6 py-2 mt-4 text-gray-50 bg-gray-600 rounded-lg hover:bg-gary-900'
                type='submit'
              >
                Login
              </button>
              <a className='text-sm text-gary-400 hover:underline'>
                Forgot password
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
