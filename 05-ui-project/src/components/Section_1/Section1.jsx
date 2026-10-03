import React from 'react'
import Nevbar from './Nevbar'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Blog from './Blog'
import ShowCase from './ShowCase'

function Section1(props) {
	
	return (
		<div className='bg-black'>
			<Nevbar/>
			<Hero/>
			<About/>
			<ShowCase/>
			<div>
				<Blog users={props.users}/>
			</div>
			<Footer/>
		</div>
	)
}

export default Section1
