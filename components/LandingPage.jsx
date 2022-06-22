import Link from 'next/link'

function LandingPage() {
  return (
    <div className='landing-page h-full grid grid-cols-2'>
      <div className='col-start-2 w-full h-full flex justify-center items-center flex-col'>
        <div className=''>
          <h1 className='text-9xl font-bold text-gray-900'>SnapSync</h1>
        </div>
        <div className='my-5'>
          <p className='text-xl font-semibold text-gray-500'>
            Your platform to share about your trip experience
          </p>
        </div>
        <div className='w-full text-center'>
          <Link href='/login'>
            <a className='mx-3 text-lg text-gray-400 underline hover:text-gray-900'>
              Explore
            </a>
          </Link>
          <Link href='/register'>
            <a className='mx-3 text-lg text-gray-500 underline hover:text-gray-900'>
              Register
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
