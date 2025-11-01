import React from 'react'

const imgPreview = () => {
  return (
    <div>
      <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
                <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            </div>
            <h2>{elem.author}</h2>
    </div>
  )
}

export default imgPreview
