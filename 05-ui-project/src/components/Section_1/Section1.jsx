import React from 'react'
import Nevbar from './Nevbar'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'

function Section1() {
	return (
		<div className=' w-full bg-black'>
			<Nevbar/>
			<Hero/>
			<About/>
			<Footer/>
		</div>
	)
}

export default Section1
