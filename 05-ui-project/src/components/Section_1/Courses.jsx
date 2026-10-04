import React from 'react'

function Courses() {
	return (
		<div className='font-[roboto] text-white rounded-3xl px-20 py-0 pb-40 mt-20'>
			<p className='text-xl mt-5 mb-5 w-40 m-auto text-center border text-white border-orange-700 '>COURSES</p>
			<h1 className='text-center py-5 mx-35 mb-15 text-5xl font-[roboto]'>Not sure which course fits you? Don’t worry, we’re Here to Help.</h1>
			<div className='flex justify-between'>
				<div className='relative w-2/5'>
					<img className=' border p-2 w-80  absolute left-0 top-5 z-10 ' src="https://plus.unsplash.com/premium_photo-1733342678263-f53160dcd9e1?q=80&w=954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
					<img className=' border p-2 w-80 absolute top-1/3 left-2/5 ' src="https://plus.unsplash.com/premium_photo-1661964320064-ca1bfb994d11?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
					<img className=' border p-2 w-80 absolute left-10 bottom-0 ' src="https://images.unsplash.com/photo-1673515335586-f9f662c01482?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
				</div>
				<div className='flex w-1/2 text-center mt-5'>
					<div className=''>
						<div>
							<img className='w-30 h-30 m-auto mb-5 rounded-full bg-orange-500' src="https://images.unsplash.com/vector-1776920487360-00efa3a4c584?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
							<p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, natus.</p>
							<button className='py-2 px-5 mb-15 bg-orange-700 text-white mt-3'>view more</button>
						</div>
						<div>
							<img className='w-30 h-30 m-auto mb-5 rounded-full bg-orange-500' src="https://images.unsplash.com/vector-1756205137904-742812476370?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
							<p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, natus.</p>
							<button className='py-2 px-5 mb-15 bg-orange-700 text-white mt-3'>view more</button>
						</div>
					</div>
					<div>
						<div>
							<img className='w-30 h-30 m-auto mb-5 rounded-full bg-orange-500' src="https://plus.unsplash.com/premium_vector-1682310984790-320401c63e7b?q=80&w=630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
							<p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, natus.</p>
							<button className='py-2 px-5 mb-15 bg-orange-700 text-white mt-3'>view more</button>
						</div>
						<div>
							<img className='w-30 h-30 m-auto mb-5 rounded-full bg-orange-500' src="https://images.unsplash.com/vector-1774883040954-6de265e0c927?q=80&w=937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
							<p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, natus.</p>
							<button className='py-2 px-5 mb-15 bg-orange-700 text-white mt-3'>view more</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Courses