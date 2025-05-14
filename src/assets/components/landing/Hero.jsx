import React from 'react'

const Hero = () => {
  return (
<section className='lg:px-25  max-w-[1300px] mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex mt-18 md:mt-35 flex-col md:text-left text-center mx-5  '>
            <h1 className='text-4xl  lg:text-5xl font-black'>Transform Your Future with Top IT Opportunities</h1>
            <p className='text-xl font-normal mt-4 mb-9'>Explore top Industrial Training (IT) placements with leading Nigerian startups and take your career to the next level.</p>
            <div className='rounded-[53px] p-4 flex justify-between shadow-lg drop-shadow-lg'>
            <input
              className='flex-1 px-4 py-2 rounded-[53px] text-[#939393] outline-none focus:outline-none focus:ring-0'
              type="text"
              placeholder='Skill title or keyword'
              aria-label="Search skill or keyword"
            />
                <button className='bg-black text-[12px]  rounded-[53px] py-2 px-4 text-white'>Search IT placement</button>
            </div>
            <p className='text-[16px] mt-4'>Popular : Front-end Developer, UI/UX Designer, Back-end Developer, QA Tester</p>
        </div>

        <div className='relative mt-10'>
            <div className='bg-black  rounded-[50%] hidden lg:flex lg:absolute left-25 pt-20 w-[600px] h-[600px] elipse'></div>

            <div className='w-[400px] mt-10 lg:ml-50'> 
          <img className='  relative object-contain overflow-hidden   z-8' src='/images/heropic.png' alt="" />

          </div>
        </div>
    </div>

</section>
  )  
}

export default Hero

