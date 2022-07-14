import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../src/features/postSlice'

function Home() {
  const dispatch = useDispatch()
  const post = useSelector(state => state.posts.posts)
  const postStatus = useSelector(state => state.posts.status)
  const userData = useSelector(state => state.user.data)
  const router = useRouter()

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [])

  useEffect(() => {
    if (!userData.access) {
      router.push('/login')
    }
  }, [userData])

  const posts =
    post &&
    post.map(item => (
      <div
        className='grid grid-cols-3 place-items-center w-2/3 my-6 border rounded p-4 h-40 bg-gray-200 rounded-lg border-t-0 border-r-0 border-l-0 border-b-1 border-gray-300 shadow-sm'
        key={item.id}
      >
        <div className='col-span-2 flex flex-col items-start w-full'>
          <Link href={`/posts/${item.id}`}>
            <h1 className='font-semibold text-3xl text-gray-900'>
              {item.title}
            </h1>
          </Link>
          <p className='my-3 text-lg text-gray-500'>
            {item.content.slice(0, 10)}
          </p>
          <sub className='text-sm text-gray-400'>Posted by: {item.author}</sub>
        </div>
        {/* {} */}
        <div className=''>
          <button className='' onClick={() => console.log('')}>
            {item.content.slice(0, 2)}
          </button>
        </div>
      </div>
    ))

  return <div className='w-full flex flex-col items-center'>{posts}</div>
}

export default Home
