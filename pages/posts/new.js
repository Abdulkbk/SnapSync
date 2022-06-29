import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { addNewPost } from '../../src/features/postSlice'

function newPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const userData = useSelector(state => state.user.data)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    const author = userData.user.id
    dispatch(addNewPost({ title, content, author }))
  }

  useEffect(() => {
    if (!userData.access) {
      router.push('/login')
    }
  }, [userData])

  return (
    <div className='flex items-start justify-center bg-gray-100 w-full h-screen'>
      <div className='bg-gray-100 px-8 py-6 mt-4 text-left bg-gray-100 shadow-sm w-4/5 h-3/4'>
        <h3 className='text-2xl font-bold text-center text-gray-900'>
          Create a new post
        </h3>
        <form className='' onSubmit={handleSubmit}>
          <div className=''>
            <div>
              <label className='text-gray-500 text-semibold'>Title</label>
              <input
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                type='text'
                placeholder='Title'
                required
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className='my-4'>
              <label className='text-gray-500 text-semibold'>Content</label>
              <textarea
                className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                onChange={e => setContent(e.target.value)}
              ></textarea>
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

export default newPost
