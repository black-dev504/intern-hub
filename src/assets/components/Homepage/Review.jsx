import React from 'react'

const Review = (props) => {
  return (
    <div className='px-15 py-10 shadow-custom  flex flex-col rounded-[20px] items-center justify-center max-w-8/10 mx-auto'>
        <p className='text-2xl font-normal text-[#282828]'>{props.review}</p>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <img className='max-w-20 max-h-20' src={props.profile} alt="" />
          <div className="flex flex-col md:pl-4 mt-2 md:mt-0">
            <h1 className="font-semibold text-3xl text-[#282828]">{props.name}</h1>
            <p className="text-[#6F6F6F] text-[20px] font-normal">{props.school}</p>
          </div>
        </div>
    </div>
  )
}

export default Review
