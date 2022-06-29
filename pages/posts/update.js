import React from 'react'

function update() {
  return (
    <div className='flex items-start justify-center bg-gray-100 w-full h-screen'>
      <div className='bg-gray-100 px-8 py-6 mt-4 text-left bg-gray-100 shadow-sm w-4/5 h-3/4'>
        <h3 className='text-2xl font-bold text-center text-gray-900'>
          Update a post
        </h3>
        <form className=''>
          <div className=''>
            <div>
              <labal className='text-gray-500 text-semibold'>Title</labal>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='text'
                placeholder='Title'
                required
              />
            </div>
            <div className='my-4'>
              <labal className='text-gray-500 text-semibold'>Content</labal>
              <textarea className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'></textarea>
            </div>
          </div>
          <div className='mt-4 flex items-baseline justify-between w-full'>
            <button className='px-6 py-2 mt-4 text-gray-50 bg-gray-600 rounded-lg hover:bg-gary-900 w-full'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default update
