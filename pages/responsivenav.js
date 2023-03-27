import React from 'react'

function responsivenav() {
  return (
    <div className='bg-yellow-500'>
      <nav className='max-w-7xl mx-auto p-5 flex justify-between items-center relative'>
        <img src="medium.png" className='w-[120px] md:w-[200px] h-full' alt="medium logo"/>
        <div className='flex items-center space-x-8 text-sm text-gray-800 hover:text-black cursor-pointer'>
          <p className='hidden lg:inline-flex'>Our Story</p>
          <p className='hidden lg:inline-flex'>Membership</p>
          <p className='hidden lg:inline-flex'>Write</p>
          <p>Sign In</p>
          <p className='text-white bg-gray-900 px-4 py-2 rounded-full hover:bg-black'>Get started</p>
        </div>
      </nav>
    </div>
  )
}

export default responsivenav