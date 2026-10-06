import React, { useState } from 'react'

function App() {


  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [state, setState] = useState([])

  const formSubmit = (e)=>{
    e.preventDefault()
    setTitle(e)
    setDetail(e)

    let copyState = [...state]
    copyState.push({title,detail})
    setState(copyState)

    setTitle('')
    setDetail('')
  }

  return (
    <div className='h-screen bg-black text-white lg:flex ' >
      <div className='lg:w-1/2 p-10'>
           <h1 className='text-2xl font-bold mb-5'>Add Notes</h1>

          <form onSubmit={(e)=>{
              formSubmit(e)
            }} 
            className='flex flex-col gap-5'>

          {/*phle title ki value ayegi*/}

            <input 
              className='border p-2' 
              type="text" 
              placeholder='type your heading'
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />

          {/*notes ki detail likhna h */}
            <textarea 
              className='border p-2 h-20 ' 
              type="text" 
              placeholder='type your note'
              value={detail}
              onChange={(e)=>{
                setDetail(e.target.value)
              }}
            />

            <button className='bg-white text-black p-2 '>Add Note</button>

          </form>
      </div>

      <div className='lg:w-1/2 p-10 lg:border-l-2 '>
         <h1 className='text-2xl font-bold mb-5'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap text-black'>

          {state.map((val,idx)=>{
            return  <div key={idx} className='w-40 h-60 p-2 bg-white rounded'>
                    <h1 className=' font-bold'>{val.title}</h1>
                    <p className='text-sm text-gray-700 my-2'>{val.detail}</p></div>
          })}
         
        </div>
      </div>
    </div>
  )
}

export default App