import React, { useState } from 'react'
import axios from 'axios'

function App() {

	// async function getData (){
	// 	const response =await fetch('https://jsonplaceholder.typicode.com/albums')
	// 	console.log(response)

	// 	let jsonData = await response.json()
	// 	console.log(jsonData)
	// }


const [state, setState] = useState([])

	async function getData (){
		const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
		console.log(response)
		console.log(response.data)

		setState(response.data)
	}

	return (
		<div>
			<button onClick={getData}>fetch data</button>
			{state.map(function( elm, idx){

				return <h1 key={idx}>hello {elm.title} </h1>
			})}
		</div>
	)
}

export default App