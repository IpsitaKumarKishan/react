import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('');

  const formSubmit = (e)=>{
    e.preventDefault();
    console.log(name);
    setName('');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formSubmit(e);
      }}>
        <input type="text" placeholder='Enter name' value={name} onChange={(e)=>{setName(e.target.value) }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
