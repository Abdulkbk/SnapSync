import React from 'react'

export default function Register() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-indigo-200'>
      <div className='px-8 py-6 mt-4 text-left bg-indigo-50 shadow-lg'>
        <h3 class='text-2xl font-bold text-center'>Register your account</h3>
        <form className=''>
          <div className='mt-4'>
            {/* Name field */}
            <div>
              <labal className=''>Name</labal>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='text'
                placeholder='Name'
              />
            </div>
            {/* Email field */}
            <div className='mt-4'>
              <labal className=''>Email</labal>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='email'
                placeholder='Email'
              />
            </div>
            {/* Password field */}
            <div className='mt-4'>
              <labal className=''>Password</labal>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='password'
                placeholder='Password'
              />
            </div>
            <div className='mt-4 flex items-baseline justify-between'>
              <button className='px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'>
                Login
              </button>
              <a className='text-sm text-blue-600 hover:underline'>
                Forgot password
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
