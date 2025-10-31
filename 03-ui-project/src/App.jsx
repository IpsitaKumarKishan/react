import React from 'react'
import Page1 from '../components/page1/page1'
import Page2 from '../components/page2/page2'
const App = () => {

  const users =[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil, quis libero quod laboriosam dolorem cumque.',
      tag:'Satisfied',
      id:'1'
    },
    {
      img:'https://images.unsplash.com/photo-1752778935928-ee12da5e3fbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      intro:' amet consectetur adipisicing elit. Veritatis perspiciatis qui nihil, quis libero quod laboriosam dolorem cumque.',
      tag:'Underserved',
      id:'2'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      intro:'Lorem ipsum dolor sit amet elit. Veritatis perspiciatis qui nihil, quis libero quod laboriosam dolorem cumque.',
      tag:'Underbanked',
      id:'3'
    }    
  ]

  return (
    <div>
      <Page1 users={users}/>
      <Page2 />
    </div>
  )
}

export default App
