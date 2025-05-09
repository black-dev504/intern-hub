import React from 'react'
import Filter from './Filter'
import Offer from './Offer'

const Home = () => {

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

    const offerData = [
        {
            position:'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES','IT'],
            price: '$5000 - $7000/Month',
            location: 'Lagos, Nigeria',
            description: ['Support the marketing team in executing campaigns, conducting market research, and analyzing data.','Gain practical experience in digital marketing and social media strategies.']
        },
        {
            position:'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES','IT'],
            price:'',
            location: 'Lagos, Nigeria',
            description: ['Support the marketing team in executing campaigns, conducting market research, and analyzing data.','Gain practical experience in digital marketing and social media strategies.']
        },
        {
            position:'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES','IT'],
            price:'',
            location: 'Lagos, Nigeria',
            description: ['Support the marketing team in executing campaigns, conducting market research, and analyzing data.','Gain practical experience in digital marketing and social media strategies.']
        }
    ]
    
  return (
    <section className='px-20 bg-white '>
        <div className='flex flex-col'>
            <h1 className='text-black text-4xl font-semibold'>Find your perfect IT placement</h1>
            <div className='flex justify=between'>
                <p className='text-black font-normal mt-1 text-xl'>Browse a variety of Industrial Training (IT) opportunities tailored to your skills and career goals today!</p>
                <div className='for status line'></div>
                </div>
        </div>

        <div className='rounded-[53px] mt-5 mb-8 p-4 flex justify-between shadow-lg drop-shadow-lg'>
                <input className='text-[#939393]' type="text" name="" id="" placeholder='Skill title or keyword' />
                <button className='bg-black text-[12px]  rounded-[53px] py-4 px-7 text-white'>Search IT placement</button>
            </div>

        <div className="lg:grid grid-cols-[25%_75%] gap-5">
            <div>
            <div className=' px-3 py-2 rounded-[16px] border-1 border-[#192c26] flex flex-col'>
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
                        <Filter title={data.title} filters={data.filters} key={index}/>
                    ))}
                </div>
            </div>
            </div>
                
            <div>
            {offerData.map((offer,index) =>(
                <Offer position={offer.position} company={offer.company} tags={offer.tags} description={offer.description} location={offer.location} price={offer.price} />
            ))}
            </div>
        </div>
    </section>
  )
}

export default Home
