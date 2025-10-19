import React from 'react'
import Card from './components/card'

const App = () => {
  return (
      <div className="parent">
        <Card userName="Ipsita kumar kishan" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, facere." src="https://images.unsplash.com/photo-1760715751401-02487fcd24b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"/>
        <Card userName="stellarani bada" para="Lorem ipsum dolor sit amet consectetur." src="https://images.unsplash.com/photo-1759401214196-9cfdf4bf685f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"/>
      </div>
  )
}

export default App
