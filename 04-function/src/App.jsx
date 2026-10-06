// import React from 'react'

// function App() {


//   // const clicked = ()=>{
//   //   console.log("hello")
//   // }

//   // function Changed(elm){
//   //   console.log(elm.target.value)
//   // }


//   // let click = ()=>{
//   //   console.log('hello')
//   // }

// //   const cn = function(elm){
// //     console.log(elm.target.value)
// //   }


// // const dblClick = ()=>{
// //   console.log("hello")
// // }
  
// // let[inetial , latest] = age

// const name = 'hellooo'
// const age = 22


//   return (
//     <div>
//     //   {/*<button onClick={clicked}>increase</button>*/}

//     {/*//   <input onChange={cn} type="text" />*/}

//     {/*//   <button on onDoubleClick={dblClick}>dubble click</button>*/}

//       {/*<input onChange={ function(elm){
//     console.log(elm.target.value)
//   }}type="text"/>*/}

//       {/*<input onDoubleClick={cn} type="text"/>*/}
     

//       {/*<input onChange={Changed} type="text"/>*/}

//       {/*<button onDoubleClick={cn}>click</button>*/}
//     // 


//       {/*<h1>Jack Sparrow age {latest}</h1>*/}
//       <h1>{name} {age}</h1>
//       {/*<button onClick={increment}>increase</button>*/}



//     </div>
//   )
// }

// // export default App

// import React from 'react'
// import { useState } from 'react'

// function App() {

//  const [state, setState] = useState({user: 'jack', age:20, place: 'joo d mohan'})

//      function data (){
//       state()
//      }
//   return (
//     <div>
     
//      <h1> {state.user} {state.age} {state.place}</h1>

    

//     </div>
//   )
// }

// export default App 


import React from 'react'
import {useState} from 'react'


function App() {

  const [state, setState] = useState({ num: 0})

  function dbClick (){
    setState({num:1})
    console.log(state)
  }

  return (
    <div>
      <h1>{state.num}</h1>
      <button onClick={dbClick}>change</button>
      
    </div>
  )
}

export default App