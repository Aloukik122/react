import React from 'react'

function Footer() {
	return (
		<div className=' bg-white flex justify-between my-10 gap-10 px-20 pt-15 rounded-t-3xl'>
			<div className='w-1/3'>
				<p className='text-2xl font-bold'>ThinkPro Classes</p>
				<p className='text-sm py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Vitae ac</p>
				<p>Follow Us</p>
			</div>
			<div className='w-1/5 list-none '>
				<h1 className='text-xl pb-5 font-semibold'>Explore</h1>
				<div className='text-sm'>
					<li className='pb-3'>Home</li>
					<li className='pb-3'>About</li>
					<li className='pb-3'>Contect us</li>
					<li className='pb-3'>Team</li>
				</div>
			</div>
			<div className='w-1/5 list-none'>
				<h1 className='text-xl pb-5 font-semibold'>Links</h1>
				<div className='text-sm'>
					<li className='pb-3'>Blog</li>
					<li className='pb-3'>Course Details</li>
					<li className='pb-3'>Contect</li>
					<li className='pb-3'>Term and Condition</li>
					<li className='pb-3'>About</li>
				</div>
			</div>
			<div className='w-1/3 mr-10'>
				<h1 className='text-xl uppercase font-semibold'>Sign up for our newsletter</h1>
				<p className='text-sm py-5 pb-7 '>Receive weekly newsletter with educational materials, popular books and much more!</p>
				<div className='flex'>
					<input className='border py-2 ' type="text"/>
					<button className='mx-5 px-5 py-2 bg-orange-700 text-white'>Subscribe</button>
			    </div>
			</div>
		</div>
	)
}

export default Footer