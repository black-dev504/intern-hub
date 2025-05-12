import React from 'react'

const Card = (props) => {
  return (
    <div className='rounded-4xl max-w-[479px] flex flex-col shadow-custom '>
        <div className=' w-full h-8/10'>
        <img src={props.img} className='object-contain rounded-t-4xl overflow-hidden' alt="" />
        </div>

        <div className='flex flex-col  mx-5'>
            <h2 className='my-2 font-bold text-2xl'>{props.title}</h2>
            <p className='text-xl mb-5 font-normal'>{props.descp}</p>

        </div>
      
    </div>
  )
}

export default Card
