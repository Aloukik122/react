import React from 'react'
import {Bookmark} from 'lucide-react'

function Card(props) {
	return (
		 <div className='card'>
        <div className="top">
          <img src="https://imgs.search.brave.com/TtobalQs4UHq3tIzjHUDmMlMAm-wmOF1P7H-IWGe1Kk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMTUxMDQy/NjQucG5nP2Y9d2Vi/cCZ3PTEyOA" alt=""/>
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className='center'>
          <h3>{props.brandName} <span>5 days ago</span></h3>
          <h2>{props.jobPost}</h2>
          <div className='jobs'>
            <h4>Part-time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>{props.price}</h3>
            <h4>{props.place}</h4>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
	)
}

export default Card