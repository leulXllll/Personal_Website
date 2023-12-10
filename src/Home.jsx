import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri';
import Hero from "./assets/hero.jpg";
import {Link} from 'react-scroll'
import Portfolio from './components/Portfolio';

function Home() {
  
  return (
    <div name="home" 
    className=' h-screen w-full bg-gradient-to-b from-black to to-blue-950
   '> 
        <div className='max-w-screen-lg mx-auto flex flex-col 
         items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
              <h2 className='text-4xl sm:text-7xl text-white
              font-bold'>Im a React , Tailwindcss  and C++ developer</h2>
              <p className='text-gray-500 py-4 max-w-md'>
                I have some experience in Html ,Javascript and CSS
              </p>
              <div>
              <Link to='portfolio' smooth duration={600} className='group text-white w-fit px-3 py-6 my-2
       flex items-center rounded-md cursor-pointer bg-black'>
                Portfolio <span className='group-hover:rotate-90 duration-300' >
                  <RiArrowRightLine size={25} className='ml-1'/>
                  </span>
              </Link>
              </div>
           </div>
           <div>
            < img src={Hero} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
           </div>
        </div>
    </div>
  )
}

export default Home