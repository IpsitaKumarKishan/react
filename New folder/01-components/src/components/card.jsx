import React from 'react'

const card = (props) => {
  return (
    
      <div className='card'>
        <img src={props.src} alt="" srcset="" />
        <h1>{props.userName}</h1>
        <p>{props.para}</p>
        <button>view</button>
      </div>
    
  )
}

export default card
