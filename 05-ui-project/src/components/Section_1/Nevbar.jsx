import React from 'react'
import logo from '../../assets/newlogo1.png'
import { Phone } from 'lucide-react';

function Nevbar() {
	return (
		<div className='text-white flex justify-between items-center px-15 py-7'>
			{/*<img className='h-15 text-white' src={logo} alt="logo" />*/}
			<p className='uppercase text-2xl font-bold underline font-[roboto] mr-20 '>ThinkPro</p>
			<div className='flex gap-10 mx-40 px-5 py-3 rounded-md border border-zinc-700 text-sm font-thin'> 
				<div>Home</div>
				<div>Courses</div>
				<div>Blog</div>
				<div>About</div>
				<div>Contect</div>
			</div>
			<div className='flex gap-2 items-center bg-orange-700 px-3 py-2 text-sm font-thin rounded-full  border border-orange-400'> <Phone size={15}/> Request Call</div>
			<button className='px-3 py-2 rounded-md border border-zinc-700 text-sm font-thin'>Sign In</button>
		</div>
	)
}

export default Nevbar