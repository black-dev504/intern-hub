import React from 'react'
import Card from './Card'

const data = [
    {
        img: '/images/cardpic1.png',
        title: 'Personalized Internship Matches',
        descp: 'Get recommendations based on your course and interests'
    },
    {
        img: '/images/cardpic2.png',
        title: 'Verified Students and Recruiters',
        descp: 'Ensure your applications are approved by your institution.'
    },
    {
        img: '/images/cardpic3.png',
        title: 'Easy Posting for Recruiters',
        descp: 'Get recommendations based on your course and interests'
    },
    {
        img: '/images/cardpic4.png',
        title: 'Application Reminders',
        descp: 'Receive timely email or in-app reminders for deadlines, interviews, and updates.'
    },
    {
        img: '/images/cardpic5.png',
        title: 'Internship Feedback & Ratings',
        descp: 'Connect with industry professionals and fellow interns.'
    },
    {
        img: '/images/cardpic6.png',
        title: 'Built-In Messaging System',
        descp: 'Receive immediate feedback on your applications and progress.'
    },
]

const Carousel = () => {
  return (
<section className='primary-font px-25  '>

     <div className='w-full justify-center text-center flex items-center '>
        <h1 className='text-[#252525] text-4xl font-black '>Why Choose Our Platform?</h1>
        </div> 
        <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-white'>
        {data.map((data,index)=><Card img={data.img} title={data.title} descp={data.descp} key={index} />) }
        </div>

</section>    )
}

export default Carousel
