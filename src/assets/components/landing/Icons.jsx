import React from 'react'

const Icons = (props) => {
  return (
    <div className='flex flex-col justify-between items-center text-center justify-items-center'>
                <div className='mb-8 border-5 flex border-primary-color rounded-[50%] items-center justify-center w-[100px] h-[100px]'>
                    <img src={props.icon} alt="" />
                </div>

                <p className='text-xl text-center font-normal'>{props.label}</p>

    </div>
  )
}

export default Icons
