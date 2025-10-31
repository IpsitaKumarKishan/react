import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-10 ml-10 p-10 w-2/3'>
       {props.users.map(function(elem){
         return <Rightcard img={elem.img} tag={elem.tag} intro={elem.intro} id={elem.id}/>
       })}
    </div>
  )
}

export default Rightcontent
