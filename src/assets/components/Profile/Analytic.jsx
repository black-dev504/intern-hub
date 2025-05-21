import React from 'react'

const Analytic = () => {
  return (
      <div className="px-5 py-4 rounded-4xl shadow-custom-100">
                    <h1 className='text-black mb-4 font-extrabold text-3xl'>Analytics</h1>
                    <div className='flex my-4'>
                        <img src="/icons/analyticicon.svg" alt="eye" />
                        <p className='profile-paragraph ml-1'>12 profile views</p>
                        
                    </div>
                    <p className='text-[14px] text-[#939393]'>Past 7 days</p>
                    <hr className='bg-[#939393]'/>

                    <button className='cursor-pointer max-w-3/10 mx-auto'>
                    <div className='flex mt-2'>
                      <p>Show all analytics</p>
                      <img src="/icons/arrow.svg" className='ml-1' alt="" />
                    </div>
                    </button>
            </div>
            
  )
}

export default Analytic
