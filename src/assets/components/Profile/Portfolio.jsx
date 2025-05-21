import React from 'react'

const Portfolio = () => {
  return (
   
          <div className='px-5 py-4 shadow-custom-100'>
            <div className="flex justify-between mb-4">
                    <h1 className='text-black font-extrabold text-3xl'>Resume & Portfolio</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
                </div>
                <p className='text-black font-semibold opacity-90 text-xl my-5'>Resume: <span ><a className='text-blue-500 underline' href="">Download Resume</a> </span>(Upload/Update)</p>
                <div className='flex flex-col'>
                  <p className='mb-2 text-xl'>Portfolio Links</p>
                  <a className='underline' href="">LinkedIn Profile</a>
                  <a className='underline' href="">LinkedIn Profile</a>
                  <a className='underline' href="">LinkedIn Profile</a>

                </div>
          </div>

  )
}

export default Portfolio
