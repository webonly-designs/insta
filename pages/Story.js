import React from 'react'

function Story({Source, Name}) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center space-y-1 cursor-pointer">
        <div className="bg-gradient-to-tr from-orange-500 to-purple-600 p-1 rounded-full">
            <a className="block bg-black p-1 rounded-full transform transition hover:-rotate-6" href="#">
                <img src={Source} className='h-24 w-24 rounded-full'/>
            </a>
        </div>
        <a href="#" className="text-white">{Name}</a>
        
    </div>
  )
}

export default Story