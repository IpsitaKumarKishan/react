import React from 'react'

const App = () => {

  const user = {
    name:"john",
    age:20,
    address:"bhopal"
  }

  localStorage.setItem("user",JSON.stringify(user));
  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users)


  return (
    <div>
      
    </div>
  )
}

export default App
