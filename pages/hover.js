import React from 'react'

function hover() {
  return (
    <div className="bg-slate-900 h-screen flex items-center justify-center">
        <button className="px-8 py-3 text-lg font-bold text-slate-100 bg-orange-500 
        rounded-lg shadow-lg shadow-orange-500/20 hover:text-white 
        hover:shadow-orange-500/40 hover:bg-amber-500">
            Hello Instagram!!
        </button>
    </div>
  )
}

export default hover