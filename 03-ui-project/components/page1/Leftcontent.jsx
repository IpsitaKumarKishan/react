import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Leftcontent = () => {
  return (
    <div className='w-1/4 p-4 flex flex-col justify-between'>
      <div className=' gap-10  flex flex-col'>
        <h1 className='text-6xl font-medium space-x-1 tracking-wider'>Prospective <span className='text-gray-600'>Customer</span> Segmentation</h1>
        <p className='w-3xs tracking-normal [word-spacing:8px]'>Depending On customer Satisfaction And access to Banking Products,Potential <br />Target Audience Can Be Devided Into Three Groups.</p>
      </div>
      <div className='text-5xl'>
            <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  )
}

export default Leftcontent
