import React from 'react'

const Skillpills = (props) => {
  return (
    <div className=' mr-2 bg-[#eee] rounded-[20%] inline-block justify-between mb-2 py-2 px-2'>
      <p className='text-black inline-block font-bold pr-2 '>{props.skill}</p> 
      <button onClick={()=>props.onRemove(props.skill)} className='cursor-pointer text-gray-500' >x</button>
    </div>
  )
}

export default Skillpills
