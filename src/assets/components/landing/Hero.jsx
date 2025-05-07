import React from 'react'

const Hero = () => {
  return (
<section className='pl-25 pr-25 pt-8'>
    <div className='grid grid-cols-2 max-w-[1300px] mx-auto'>
        <div className='flex mt-35 flex-col '>
            <h1 className='text-[50px] font-black'>Transform Your Future with Top IT Opportunities</h1>
            <p className='text-xl font-normal mt-3 mb-9'>Explore top Industrial Training (IT) placements with leading Nigerian startups and take your career to the next level.</p>
            <div className='rounded-[53px] p-4 flex justify-between shadow-lg drop-shadow-lg'>
                <input className='text-[#939393]' type="text" name="" id="" placeholder='Skill title or keyword' />
                <button className='bg-black text-[12px]  rounded-[53px] py-4 px-7 text-white'>Search IT placement</button>
            </div>
            <p className='text-[16px] mt-4'>Popular : Front-end Developer, UI/UX Designer, Back-end Developer, QA Tester</p>
        </div>

        <div className='relative mt-10'>
            <div className='bg-black  rounded-[50%] absolute left-25 pt-20 w-[600px] h-[600px] elipse'></div>

            <div className='w-[400px] mt-10 ml-50'> 
          <img className='  relative object-contain overflow-hidden   z-10' src='/images/heropic.png' alt="" />

          </div>
        </div>
    </div>

</section>
  )  
}

export default Hero

