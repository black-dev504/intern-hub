import React from 'react'

const Options = (props) => {
  return (
    <div>
       <div className='flex lg:flex-col mt-2 '>
                <h1 className='font-bold text-xl'>{props.title}</h1>
             
                <div>
                {props.filters.map((filter,index)=>(
                        <div className='inline-block mr-4'> 
                        <input
                        key={index}
                        type="radio"
                        name={props.title}
                        value={filter}
                        className="mr-4 text-xl checked:bg-blue-700 appearance-none border-1 w-[15px] h-[15px] text-black "
                        />

                         <label htmlFor="">{filter}</label>
                </div>
                ))}
                </div>
                

             
                </div>
    </div>
  )
}

export default Options
