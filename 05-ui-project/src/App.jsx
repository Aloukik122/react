import React from 'react'
import Section1 from './components/Section_1/Section1'

function App() {

 const users= [
    {img : 'https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',},
    {img : 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww'},
    {img : 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww'},
    {img : 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww'},
    {img : 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww'},
    {img : 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {img : 'https://images.unsplash.com/photo-1524749292158-7540c2494485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D'},
    {img : 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D'},
    {img : 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D'},
  ]

  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App