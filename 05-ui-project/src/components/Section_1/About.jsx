import React from 'react'
import about1 from '../../assets/about-1.jpg'
import about2 from '../../assets/about-2.jpg'
import about3 from '../../assets/about-3.jpg'
import bgAbout from '../../assets/about-shape-2.png'
import { Check } from 'lucide-react';

function About() {
	return (
		<div className=' w-full bg-white rounded-3xl font-[roboto] pb-5'>
			<div className='text-center pt-20'>
				<p className='text-xl mt-5 mb-5 w-40 m-auto border border-orange-700 bg-orange-100'>ABOUT US</p>
				<h1 className='text-6xl mx-50'>Empowering Students and Young Professionals to <span className='text-orange-700'> Grow Smarter.</span> </h1>
			</div>

			<div  className='flex justify-between my-20 mx-10'>
				<div style={{backgroundImage :`url(${bgAbout})`}} className='bg-no-repeat bg-contain'>
					<div className='flex pl-20 gap-3'>
						<div className='flex flex-col gap-3'>
							<img className='w-90' src={about1} alt="about-1"/>
							<img className='pl-21 w-fit ' src={about3} alt="about-1"/>
						</div>
						<div>
							<img className='w-170 h-fit' src={about2} alt="about-1"/>
						</div>
					</div>
				</div>
				<div className=' mx-20 '>
					<h1 className='text-5xl'>Degrees in Various academic Didciplines</h1>
					<p className='pt-5'>Not only can university offer an environment rich in our social an cultural experiences.</p>
					<ul className='my-5'>
						<li className='flex gap-2 '><Check color="#ff5000" strokeWidth={2.5} size={24} className='bg-orange-200 rounded-full p-1'/> Access to all our courses</li>
						<li className='flex gap-2 my-2'><Check color="#ff5000" strokeWidth={2.5} size={24} className='bg-orange-200 rounded-full p-1'/>Learn the latest skills</li>
						<li className='flex gap-2'><Check color="#ff5000" strokeWidth={2.5} size={24} className='bg-orange-200 rounded-full p-1'/> Upskill your organization</li>
					</ul>
					<button className='border py-3 px-8 mt-5 bg-orange-700 text-white'>Read More</button>
				</div>
				
			</div>
		</div>
	)
}

export default About