import React from 'react'
 import { Link } from 'react-router-dom'

function Nevbar() {
	return (
		<div>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contect'>Contect</Link>

				{/*<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/contect">Contect</a>*/}
			</div>
		</div>
	)
}

export default Nevbar