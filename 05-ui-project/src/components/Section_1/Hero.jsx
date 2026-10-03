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
			<button className='flex gap-2 m-auto mt-5 bg-orange-800 border border-orange-900 py-3 px-6 rounded-xl text-sm font-bold'>Start Journey <ArrowRight strokeWidth={2} size={20} /></button>
		</div>
	)
}

export default Hero