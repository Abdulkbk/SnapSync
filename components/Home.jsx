import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPosts } from '../Query'

function Home() {
  const [post, setPost] = useState([
    {
      id: 1,
      author: 'Abdullahi Yunus',
      title: 'The new age',
      content: 'Some text as the content',
    },
    {
      id: 2,
      author: 'Abdullahi Yunus',
      title: 'The new age',
      content: 'Some text as the content',
    },
    {
      id: 3,
      author: 'Abdullahi Yunus',
      title: 'The new age',
      content: 'Some text as the content',
    },
    {
      id: 4,
      author: 'Abdullahi Yunus',
      title: 'The new age',
      content: 'Some text as the content',
    },
  ])

  useEffect(() => {
    getAllPosts()
  }, [])

  const posts =
    post &&
    post.map(item => (
      <div
        className='grid grid-cols-3 place-items-center w-2/3 my-6 border rounded p-4 h-40 bg-gray-200 rounded-lg border-t-0 border-r-0 border-l-0 border-b-1 border-gray-300 shadow-sm'
        key={item.id}
      >
        <div className='col-span-2 flex flex-col items-start w-full'>
          <Link href=''>
            <h1 className='font-semibold text-3xl text-gray-900'>
              {item.title}
            </h1>
          </Link>
          <p className='my-3 text-lg text-gray-500'>
            {item.content.slice(0, 10)}
          </p>
          <sub className='text-sm text-gray-400'>Posted by: {item.author}</sub>
        </div>
        <div className=''>
          <h1 className=''>{item.content.slice(0, 2)}</h1>
        </div>
      </div>
    ))

  return <div className='w-full flex flex-col items-center'>{posts}</div>
}

export default Home
