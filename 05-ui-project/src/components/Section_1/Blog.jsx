import React from 'react'

function Blog(props) {
	console.log(props)

	return (
		<div className='font-[Roboto]'>
			<h1 className='text-5xl mt-10 tracking-wider text-white text-center '>Blog </h1>
		<div id='noneScrol'  className=' flex flex-nowrap overflow-x-auto gap-10 mx-20 py-10 mt-10 '>

			{ props.users.map(function(elm){
				return <div className='shrink-0 w-80 text-white text-center '><img className='' src={elm.img} alt=""/>
				<p className='my-3'>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Lorem ipsum dolor sit.</p>
				<button className='px-5 py-2 bg-orange-700 text-white text-sm '>View More</button></div>
			})} 
		</div>
		</div>
	)
}

export default Blog