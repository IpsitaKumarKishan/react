import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (elem) => {
  return (
    
      <div className='h-full w-1/3 relative rounded-4xl overflow-hidden'>
         <img className='h-full w-full object-cover' src={elem.img} alt="" />
         <Rightcardcontent tag={elem.tag} intro={elem.intro} id={elem.id}/>
       </div>
       
  )
}

export default Rightcard
