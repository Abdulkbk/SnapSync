import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectPostById } from '../../src/features/postSlice'

function post() {
  const router = useRouter()
  const { id } = router.query
  const post = useSelector(state => selectPostById(state, id))
  const userData = useSelector(state => state.user.data)

  useEffect(() => {
    if (!userData.access) {
      router.push('/login')
    }
  }, [userData])

  return (
    <div className='flex flex-col justify-center items-center w-full min-h-40'>
      <h1 className='font-semibold text-3xl text-gray-900 mt-6'>
        {post && post.title}
      </h1>
      <div className='my-3 text-lg text-gray-500'>{post && post.content}</div>
    </div>
  )
}

export default post
