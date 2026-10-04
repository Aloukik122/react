import React from 'react'
import Nevbar from './Nevbar'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Blog from './Blog'
import ShowCase from './ShowCase'
import Courses from './Courses'

function Section1(props) {
	
	return (
		<div className='bg-black'>
			<Nevbar/>
			<Hero/>
			<About/>
			<Courses/>
			<ShowCase/>
			<div>
				<Blog users={props.users}/>
			</div>
			<Footer/>
		</div>
	)
}

export default Section1
