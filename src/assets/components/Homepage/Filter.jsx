import React from 'react'
import Options from './Options'

const Filter = (props) => {

  const  data = [
    {
        title: 'Intership Category',
        filters: ['SIWES', 'IT']
    },
    {
        title: 'Stipend',
        filters: ['Paid', 'Unpaid']
    },
    {
        title: 'Date Posted',
        filters: ['Any date', 'Today','Last 3 days']
    },
]
  return (
    <div>
                <div className=' px-3 py-2 rounded-[16px] border-1 border-[#192c26] sticky top-0flex flex-col'>
                      <div className='flex justify-between'>
                          <p className='font-bold text-xl text-black'>Location</p>
                          <button className="text-xl cursor-pointer font-bold text-red-500">Clear all</button>
                      </div>
      
                      <div className='flex justify-baseline mt-4 '>
                          <img src="/icons/Location.svg" className="w-[15px] mt-1 mr-1 h-[18px]" alt="" />
                      <div className='border-b-1  border-black w-full flex justify-between '>
                          <input type="text" className='font-normal text-[16px] removable ' placeholder='Ibadan,Nigeria' />
                          <button>^</button>
       
                      </div>
      
                      </div>
                      <div className="inline-block">
                          {data.map((data,index)=>(
                              <Options title={data.title} filters={data.filters} key={index}/>
                          ))}
                      </div>
                  </div>
    </div>
  )
}

export default Filter
