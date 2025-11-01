import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[index])
  let printUserData = <h2 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading..</h2>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (

    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-5 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-5'>
      <button className='bg-amber-300 px-2 active:scale-95 py-1.5 rounded-xl text-black cursor-pointer' onClick={()=>{
        if(index>1){
          setIndex(index-1);
          setUserData([]);
        }
      }}>Prev</button>
      <h3>page {index}</h3>
      <button className='bg-amber-300 px-2 active:scale-95 py-1.5 rounded-xl text-black cursor-pointer' onClick={()=>{
        setIndex(index+1)
        setUserData([]);
        }}>next</button>
      </div>
    </div>
  )
}

export default App
