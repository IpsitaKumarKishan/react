import React, { useState } from 'react'

const App = () => {

  const [heading, setheading] = useState("");
  const [detail, setdetail] = useState("");
  const [task, settask] = useState([]);

  const formSubmit=(e)=>{
    e.preventDefault();
    const copyTask = [...task]; 
    copyTask.push({heading,detail})
    settask(copyTask);
    setheading("");
    setdetail("");
  }
  const removeNotes =(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    settask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form className='flex gap-5 lg:w-1/2 items-start flex-col p-10' onSubmit={(e)=>{formSubmit(e);}}>
        <h1 className='text-3xl font-bold'>Add notes</h1>
          <input 
            value={heading}
            onChange={(e)=>{
              setheading(e.target.value)
            }}
            type="text" 
            placeholder='Enter task heading'
            className='px-5 w-full font-medium py-2 outline-none border-2 rounded'
          />
          <textarea 
          value={detail}
            onChange={(e)=>{
              setdetail(e.target.value)
            }}
            type="text" 
            placeholder='Enter the details'
            className='px-5 w-full h-32 font-medium py-2 outline-none border-2 rounded'
          />
          <button className='bg-white active:bg-gray-400 font-medium w-full outline-none px-5 py-2 text-black rounded'>Add notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-4 p-10'>
          <h1 className='text-3xl font-bold'>Your notes</h1>
          <div className='flex items-start gap-5 justify-start flex-wrap mt-5 h-full overflow-auto'>
            {
              task.map(function(elem,idx){
                return <div key={idx} className='flex flex-col justify-between h-52 text-black p-4 gap-2 w-40 rounded-xl bg-white bg-cover '>
                  <div className='gap-2'>
                    <h2 className='text-xl font-bold leading-tight '>{elem.heading}</h2>
                    <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.detail}</p>
                  </div>
                  <button onClick={()=>{removeNotes(idx)}} className='bg-red-500 text-white rounded-xl p-1'>Remove</button>
                </div>
              })
            }
            
          </div>
      </div>
    </div>
  )
}

export default App
