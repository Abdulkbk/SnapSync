import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../src/features/userSlice'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`submitting ${name} ${email} ${password}`)
    dispatch(registerUser({ name, email, password }))
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='px-8 py-6 mt-4 text-left bg-gray-100 shadow-lg'>
        <h3 className='text-2xl font-bold text-center text-gray-900'>
          Register your account
        </h3>
        <form className='' onSubmit={handleSubmit}>
          <div className='mt-4'>
            {/* Name field */}
            <div>
              <label className='text-semibold text-gray-500'>Name</label>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='text'
                placeholder='Name'
                onChange={e => setName(e.target.value)}
              />
            </div>
            {/* Email field */}
            <div className='mt-4'>
              <label className='text-semibold text-gray-500'>Email</label>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            {/* Password field */}
            <div className='mt-4'>
              <label className='text-semibold text-gray-500'>Password</label>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='mt-4 flex items-baseline justify-between'>
              <button
                className='px-6 py-2 mt-4 text-gray-100 bg-gray-600 rounded-lg hover:bg-gary-900 w-full'
                type='submit'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
