import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Rightcardcontent = (elem) => {
  return (
    <div className='absolute h-full top-0 left-0 w-full p-8 flex flex-col justify-between '>
            <h2 className='h-8 w-8 rounded-full flex items-center justify-center bg-amber-50 font-bold' >{elem.id}</h2>
            <div>
                <p className='mb-12 text-white text leading-relaxed'>{elem.intro}</p>
                <div className='flex justify-between'>
                    <button className='text-white bg-blue-600 px-5 py-2 rounded-full font-medium'>{elem.tag}</button>
                    <button className='text-white bg-blue-600 px-3 py-2 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
    </div>
  )
}

export default Rightcardcontent
