import React from 'react'
import html from '../assets/html.jpg'
import tailwindcss from '../assets/tailwindcss.jpg'
import css from '../assets/css.jpg'
import react from '../assets/reactjs.jpg'
import github from '../assets/github.png'
import javascript from '../assets/javascript.jpg'


function Experience() {
    const tech =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:javascript,
            title:'Java Script',
            style:'shadow-yellow-500'
        },
        {
            id:3,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:4,
            src:react,
            title:'react',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwindcss,
            title:'Tailwindcss',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:github,
            title:'Github',
            style:'shadow-gray-400'
        },
    ]
  return (
    <div name='experience' className='bg-gradient-to-bl from-blue-900 to-black w-full h-full
    '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>

                <p className='text-4xl font-bold border-b-4 
                border-gray-500 p-2 inline'>Experience</p>
               
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8
            text-center py-8 px-12 sm:px-0'>
                {
                    tech.map(({id,src,title,style})=>(

                        <div key={id} className={`shadow-md hover:scale-105 duration-500
                        py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className='w-20 mx-auto'/>
                            <p className='mt-4 '>{title}</p>
                        </div>
                    ))
                }
               
            </div>
        </div>
    </div>
  )
}

export default Experience