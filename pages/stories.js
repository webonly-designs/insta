import React from 'react'
import Story from './Story'

function stories() {
  return (
    <div className="bg-black relative max-w-lg mx-auto">
      <div className="relative h-full flex overflow-x-auto space-x-6 p-5">
        <Story Source="/pic-1.jpg" Name="jennifer"/>
        <Story Source="/pic-2.png" Name="robert"/>
        <Story Source="/pic-3.jpg" Name="william"/>
        <Story Source="/pic-4.jpg" Name="jessica"/>
        <Story Source="/pic-5.jpg" Name="charles"/>
      </div>
    </div>
  )
}

export default stories