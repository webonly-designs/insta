import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const showNotification = () => {
    toast.success("Button Click Success!!")
 } 

function notification() {
  return (
    <div>
        <Toaster/>
        <div className="bg-black flex items-center justify-center py-24">
            <button
                onClick={showNotification}
                className="text-white rounded bg-sky-500 px-8 py-2 text-xl font-bold hover:bg-green-500"
            >
                Click Me
            </button>
        </div>
    </div>
  )
}

export default notification