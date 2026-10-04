import React from 'react'
import { MoveRight } from 'lucide-react'
import { MoveLeft } from 'lucide-react'

function ShowCase() {
	return (
		<div className=' bg-white font-[roboto] rounded-3xl text-center py-20 px-20 '>
			<p className='text-xl mt-5 mb-5 w-40 m-auto border border-orange-700 bg-orange-100'>COMMUNITY</p>
			<h1 className='text-5xl py-3'>They Came. They Cooked. The Got Placed</h1>
			<div className='flex mt-15 '>
				<div>
					<div className='border p-3 rounded-2xl '>
						<img className='rounded-2xl' src="https://images.unsplash.com/photo-1675434303097-210c75b61d3f?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
					</div>
				</div>
				<div className=' flex flex-col justify-between px-10 w-3/5'>
					<div className=' flex justify-between'>
					    <div className='text-xl font-bold border-b'>Jack Sparrow</div>
					    <button className='py-2 px-5 text-sm bg-orange-700 text-white'>View More</button>
					</div>
					<p className='text-left'>Joining ThinkPro Classes for Web Development was the best decision for my career journey. The hands-on training and guidance from experienced mentors helped me master full-stack development, including frontend design and backend database management. Working on real-world projects gave me the technical skills and practical confidence needed to stand out. Thanks to this comprehensive coaching, I successfully completed the program and secured a fantastic job as a professional web developer.
					</p>
					<div className='text-left'>
						<p>Avneesh Kumar Singh</p>
						<p>Mumbai, India</p>
					</div>
					<div className='flex justify-between '>
						<div className='flex gap-1'>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
						</div>
						<div className='flex justify-between gap-4'>
							<MoveLeft strokeWidth={3}/>
							<MoveRight strokeWidth={3} />
						</div>
					</div>
				</div>

				<div className='text-black rounded-xl border px-5 pb-5 w-1/3 flex flex-col justify-between'>
					<h3 className='pb-5 text-2xl'>Show Your Skill</h3>
					<div className='mb-20'>
						<input className='border p-2 my-2 w-60' type="text" placeholder='Your Name' name="" id=""/>
						<input className='border p-2 my-2 w-60' type="text" placeholder='Your Email' name="" id=""/>
						<textarea className='border p-2 my-2 w-60' name="" id=""></textarea>
						<input className='py-2 px-5 w-60 bg-orange-700 text-white ' type="submit" name="" id=""/>

					</div>
					<div className='text-sm text-left'>
						<p className='text-lg'>Timing</p>
						<p>Mon to Sat - 08:00 am to 08:00 pm</p>
						<p>Sun - 10:00 am to 2:00 pm</p>
					</div>
				</div>
			</div>

			
		</div>
	)
}

export default ShowCase