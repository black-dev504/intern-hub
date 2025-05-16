import React from 'react'
import Filter from './Filter'
import Offer from './Offer'
import Offerlist from './Offerlist';
import { useAuth } from '../../../AuthProvider';

const Home = () => {

   const {user} = useAuth()

  return (
    <section className='md:px-20 px-5 bg-white '>
        <div className='flex flex-col'>
            <h1 className='text-black text-4xl font-semibold'>Find your perfect IT placement</h1>
            <div className='flex justify-between'>
                <p className='text-black font-normal mt-1 text-xl'>Browse a variety of Industrial Training (IT) opportunities tailored to your skills and career goals today!</p>
                <div className='for status line'>{user.email}</div>
                </div>
        </div>

        <div className='rounded-[53px] mt-5 mb-8 p-4 flex justify-between shadow-lg drop-shadow-lg'>
                <input className='text-[#939393]' type="text" name="" id="" placeholder='Skill title or keyword' />
                <button className='bg-black text-[12px]  rounded-[53px] py-4 px-7 text-white'>Search IT placement</button>
            </div>

        <div className="lg:grid grid-cols-[25%_75%] gap-5">
            <div className=' h-max relative'>
            <Filter />
            </div>
                
            <div className="h-[calc(100vh-100px)] overflow-y-auto pr-2">
            <Offerlist />
            </div>
        </div>

        

    </section>
  )
}

export default Home
