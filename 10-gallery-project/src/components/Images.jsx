import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Images() {

	const [images, setImages] = useState([])

	const getData =async ()=>{
	const response =await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
	setImages(response.data)
	}

	let printData = 'no image present'

	if (images.length>0){
		printData = images.map((elem,idx)=>{
		return <img key={idx} className='w-50' src={elem.url} alt=""/>
	 })
	}

return (
	<div className='p-10 bg-zinc-900  '>
		<button onClick={getData} className='bg-white py-3 px-5 font-bold rounded'> view images</button>
 		 <div className='flex flex-wrap justify-around gap-10 '>{printData}</div>
	</div>
)
}

export default Images