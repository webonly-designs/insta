import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function loader() {
  return (
    <div className="flex h-screen bg-black items-center justify-center">
        <div className="flex items-center px-8 py-3 bg-gray-900 rounded-lg">
            <AiOutlineLoading3Quarters 
                className="w-10 h-10 animate-spin text-sky-500 mr-6"/>
            <p className="text-slate-100 text-4xl">Processing</p>
        </div>
    </div>
  )
}

export default loader