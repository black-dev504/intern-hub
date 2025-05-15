import React from 'react'

const Offer = (props) => {
  return (
    <div>
      <div className="flex flex-col rounded-[16px]  px-3 lg:px-6 py-3 border-1 mb-8 border-[#192c26]">
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className='flex flex-col'>
                        <h1 className='text-black text-xl font-bold' >{props.position}</h1>
                        <div className="flex lg:flex-row flex-col">
                            <p className='font-bold text-[18px] removable' >{props.company}</p>

                        <div className='flex'>
                    {props.tags.map((tag,index)=>(
                            
                    <div className='flex items-center' key={index} > 
                            <div className='w-[7px] h-[7px] bg-[#939393] rounded-[50px] mx-3'></div>          
                        <div className='rounded-[20px] max-w-[80px] bg-[#FF5C00] text-[#FF5C00] '><div className='bg-white opacity-[50%] py-[2px] px-3'>{tag}</div></div>

                     
                    </div>
                        ))}
                        </div>

                        {props.paid? <div className='flex items-center'> <div className='w-[7px] h-[7px] bg-[#939393] rounded-[50px] mx-3'></div> 
                                          <p className='removable text-[16px] font-bold'>{props.price}</p>  </div>
                                     : <div className='flex-items flex items-center'> <div className='w-[7px] h-[7px] bg-[#939393] rounded-[50px] mx-3'></div>          
                                     <div className='rounded-[20px] max-w-[80px] bg-[#939393] removable '><div className='bg-white opacity-[50%] py-[2px] px-3'>Unpaid</div></div>
             </div>}
                       


                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex mb-2 '>
                            <img src="/icons/Location.svg" alt="" className='mr-3'/>
                            <p className='font-bold text-[14px]' >{props.location}</p>
                        </div>

                        <p className='removable font-medium text-[14px]  pl-3 ' >Posted 2 days ago</p>
                    </div>
                </div>

                <div className='list mt-3 '>
                {props.description.map((role,index)=>(
                      
                           <li  key={index} className='font-bold removable mb-1 ml-2 text-[16px]'>{role}</li>
                     
                ))}
               </div>
            </div>
    </div>
  )
}

export default Offer
