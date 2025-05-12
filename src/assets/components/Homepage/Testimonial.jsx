import React from 'react'
import Review from './Review'

const Testimonial = () => {
    const data = [
        {
            profile: '/images/profile.png',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eum deleniti optio quae enim alias dignissimos. Rem labore repellat eveniet iste nulla, fuga atque cupiditate debitis eos inventore ab pariatur delectus amet esse perferendis sapiente mollitia totam alias, ratione nemo facere fugit eaque autem dolorem! Ipsa incidunt sint veritatis sapiente?",
            school:'obafemi awolowo uni',
            name:'Segun aina'
        }
    ]
  return (
    <section className='text-center mb-8'>
        <h1 className="text-[#252525] text-4xl font-black">Testimonies</h1>

        <div className="mt-8 mb-18 flex w-full gap-[10px] [&::-webkit-scrollbar]:hidden overflow-x-auto px-4">
         {data.map((item,index)=>(<Review key={index} profile={item.profile} name={item.name} school={item.school} review={item.review}/>))}
        </div>

    </section>
  )
}

export default Testimonial
