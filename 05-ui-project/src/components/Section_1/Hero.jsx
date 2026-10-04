import React from 'react'
import bgHero from '../../assets/Background.svg'
import{ArrowRight} from 'lucide-react'

function Hero() {
	return (
		<div style={{backgroundImage :`url(${bgHero})`}} className='font-[roboto] tracking-wide brightness-125 bg-contain bg-no-repeat bg-center h-140 w-full text-white text-center'>

			<p className='pt-15 text-xl text-orange-700 uppercase font-[roboto] tracking-wider'>welcome to Thinkpro Classes</p>
			<h1 className='text-7xl mt-5 tracking-wider '>Upgrade Your Skills, </h1>
			<h1 className='text-7xl tracking-wider'> Build Your <span className='inline-flex border border-orange-700 px-3 leading-none mt-2 pb-1 '> Future.</span></h1>
			<div className='mt-5 text-xl text-zinc-400 font-thin font-[roboto] tracking-wider'>Join us for strong academic foundations and practical, future-ready </div>
			<p className='mt-1 text-xl text-zinc-400 font-[roboto] tracking-wider'> computer tech training.  </p>
			
			<div className='flex justify-center align-middle m-2'>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
							<div className='w-8 h-8 rounded-full border bg-[url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top'></div>
							<p className='p-1 ml-2 text-zinc-600'><span className='text-orange-700 font-bold'>100+</span> Students learning in our institute</p>
						</div>
			<button className='flex gap-2 m-auto mt-5 bg-orange-800 border border-orange-900 py-3 px-6 rounded-xl text-sm font-bold'>Start Journey <ArrowRight strokeWidth={2} size={20} /></button>
		</div>
	)
}

export default Hero