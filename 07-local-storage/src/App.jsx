import React, { useState } from 'react'

function App() {

  
// let storeData = ()=>{
//   localStorage.setItem('nnn','fdsfsdfsdf')
//   console.log(localStorage.setItem('nnn','fdsfsdfsdf'))
// }

// let getData = ()=>{
//   localStorage.getItem('nnn')
//   console.log(localStorage.getItem('nnn'))
// }

// localStorage.clear()
// localStorage.removeItem('nnn')

  const data =  {
    name : 'wind sparrows',
    age: 10,
    add : '10/10 gh turtal island k3 universe'
  }

  function storeData (){
    localStorage.setItem('data', JSON.stringify(data))
  }

  function getData (){
    localStorage.getItem('data')
    console.log(typeof(localStorage.getItem('data')))
    console.log(typeof (JSON.parse((localStorage.getItem('data')))))

  }

  return (
    <div>
      <button onClick={storeData} >Store Data</button>
      <button onClick={getData} >Get Data</button>
    </div>
  )
}

export default App