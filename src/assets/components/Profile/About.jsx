import React from 'react'

const About = ({about}) => {
  return (

            <div className="px-5 py-4 rounded-4xl shadow-custom-100">
                <div className="flex justify-between mb-4">
                    <h1 className='text-black font-extrabold text-3xl'>About</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
                </div>
                <input type="textarea" placeholder={about}/> 
              </div>
  )
}

export default About
