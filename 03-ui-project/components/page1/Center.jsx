import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Center = () => {
  return (
    <div>
        <div className='px-15 py-8 h-[90vh] w-full flex gap-10'>
        <Leftcontent />
        <Rightcontent />
        </div>
    </div>
  )
}

export default Center
