import React from 'react'

const Ready = () => {
  return (
    <div className="my-18 bg-[url('/images/readypic.png')] bg-cover bg-center items-center justify-center font-bold text-4xl px-20 py-15 flex flex-col">
        <h1 className='text-white '>Ready to Get Started?</h1>
        <p className='mt-5 mb-8 text-white font-normal text-xl'>Join thousands of students and recruiters shaping the future together.</p>

        <div className='flex my-8'>
            <button className='cursor-pointer border-1 mr-8 rounded-[53px] text-xl border-[#609987]  hover:bg-secondary text-secondary px-4 py-6'>Find IT placements</button>
            <button className='cursor-pointer px-4 py-6 bg-secondary rounded-[53px] text-xl text-white'>Upload Opportunities</button>

        </div>
    </div>
  )
}

export default Ready
