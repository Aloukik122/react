import React from 'react'

function Card(props) {
	return (
		<div>
			<div className='parent'>
				<img src={props.images} alt=""/>		
		        <h1 className='name'>{props.name}</h1>
		        <p className='parra'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
		        <button className='btn'>View More </button>
     		 </div>
		</div>
	)
}

export default Card