import React from 'react'
import about1 from '../../assets/about-1.jpg'
import about2 from '../../assets/about-2.jpg'
import about3 from '../../assets/about-3.jpg'
import bgAbout from '../../assets/about-shape-2.png'

function About() {
	return (
		<div className=' w-full bg-white rounded-3xl font-[roboto]'>
			<div className='text-center pt-20'>
				<p className='text-xl mt-5 mb-5 w-40 m-auto border border-orange-700 bg-orange-100'>ABOUT US</p>
				<h1 className='text-6xl mx-50'>Empowering Students and Young Professionals to <span className='text-orange-700'> Grow Smarter.</span> </h1>
			</div>

			<div  className='flex justify-between mt-20'>
				<div style={{backgroundImage :`url(${bgAbout})`}} className='bg-no-repeat'>
					<div className='flex pl-20 gap-3'>
						<div className='flex flex-col gap-3'>
							<img className='w-80' src={about1} alt="about-1"/>
							<img className='pl-21 w-fit ' src={about3} alt="about-1"/>
						</div>
						<div>
							<img className='w-130 h-fit' src={about2} alt="about-1"/>
						</div>
					</div>
				</div>
				<div className=' mx-20 '>
					<h1 className='text-5xl'>Degrees in Various academic Didciplines</h1>
					<p className=''>Not only can university offer an environment rich in our social an cultural experiences.</p>
				</div>
				
			</div>
		</div>
	)
}

export default About