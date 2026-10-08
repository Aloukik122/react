import React from 'react'
import axios from 'axios'

function App() {

	// async function getData (){
	// 	const response =await fetch('https://jsonplaceholder.typicode.com/photos')
	// 	console.log(response)

	// 	let jsonData = await response.json()
	// 	console.log(jsonData)
	// }

	async function getData (){
		const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
		console.log(response)
		console.log(response.data)
	}

	return (
		<div>
			<button onClick={getData}>fetch data</button>
		</div>
	)
}

export default App