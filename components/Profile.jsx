import React from 'react'

export default function Profile() {
  return (
    <div class='max-w-5xl rounded overflow-hidden shadow-md'>
      <img
        class='w-full'
        src='/assets/snap.png'
        alt='Sunset in the mountains'
      />
      <div class='px-6 py-4'>
        <>
          <div className='font-bold text-lg'>Name:</div>
          <div class='semi-bold text-md mb-2'>The Coldest Sunset</div>
        </>
        <>
          <div className='font-bold text-lg'>About:</div>
          <p class='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </>
      </div>
      <div class='px-6 pt-4 pb-2'>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
  )
}
