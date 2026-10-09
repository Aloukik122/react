import React, { useEffect, useState } from 'react'

function App() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function clickA(){
    console.log("A is clicked......")
    setA(a+1)
  }

  function clickB(){
     console.log("B is clicked......")
     setB(b+1)
  }

// if effect not given it will work on every change which is happning
  useEffect(() => {
   console.log('hello') 
  },[a]) 

  return (
    <div>
      <h2>{a}</h2>
      <h2>{b}</h2>
      <button onClick={clickA}>Click A </button>
      <button onClick={clickB}>Click B </button>
      
    </div>
  )
}

export default App