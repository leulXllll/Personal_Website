import React from 'react'

function Contact() {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-blue-900 to-black
                 text-white">
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-gray-500'>Contact</p>
                <p className='mt-3 py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/6dd49e38-0aed-417e-9bf5-067e7a4940ba' 
                className='flex flex-col w-full  md:w-1/2' method='POST'>
                    <input type='text' name='name' placeholder='Enter your name'
                  className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'    > 
                    </input>
                    <input type='email' name='email' placeholder='Enter your email'
                  className='p-3 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'    > 
                    </input>
                    <textarea name='message' rows='10' placeholder="Enter your message" className='p-3 bg-transparent border-2
                    rounded-md text-black focus:outline-none'>

                    </textarea> 
                    <button className='text-white 
                    bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3
                    my-8 mx-auto flex items-center rounded:md hover:scale-105 duration-200'>Let's Chat</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact