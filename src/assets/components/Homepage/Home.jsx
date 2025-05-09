import React from 'react'
import Filter from './Filter'
import Offer from './Offer'
import Offerlist from './Offerlist';

const Home = () => {

   

    const offerData = [
        {
          position: 'Software developer intern',
          company: 'Insight Analytics Corp',
          tags: ['SIWES', 'IT'],
          price: '$5000 - $7000/Month',
          location: 'Lagos, Nigeria',
          description: [
            'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
            'Gain practical experience in digital marketing and social media strategies.',
          ],
        },
        {
          position: 'Software developer intern',
          company: 'Insight Analytics Corp',
          tags: ['SIWES', 'IT'],
          price: '',
          location: 'Lagos, Nigeria',
          description: [
            'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
            'Gain practical experience in digital marketing and social media strategies.',
          ],
        },
        {
          position: 'Software developer intern',
          company: 'Insight Analytics Corp',
          tags: ['SIWES', 'IT'],
          price: '',
          location: 'Lagos, Nigeria',
          description: [
            'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
            'Gain practical experience in digital marketing and social media strategies.',
          ],
        },
        {
          position: 'Frontend Developer Intern',
          company: 'Tech Solutions Ltd',
          tags: ['Frontend', 'React'],
          price: '$3000 - $5000/Month',
          location: 'Abuja, Nigeria',
          description: [
            'Build and maintain web applications using React.',
            'Collaborate with the design team to implement UI/UX designs.',
          ],
        },
        {
            position: 'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES', 'IT'],
            price: '$5000 - $7000/Month',
            location: 'Lagos, Nigeria',
            description: [
              'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
              'Gain practical experience in digital marketing and social media strategies.',
            ],
          },
          {
            position: 'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES', 'IT'],
            price: '',
            location: 'Lagos, Nigeria',
            description: [
              'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
              'Gain practical experience in digital marketing and social media strategies.',
            ],
          },
          {
            position: 'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES', 'IT'],
            price: '',
            location: 'Lagos, Nigeria',
            description: [
              'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
              'Gain practical experience in digital marketing and social media strategies.',
            ],
          },
          {
            position: 'Frontend Developer Intern',
            company: 'Tech Solutions Ltd',
            tags: ['Frontend', 'React'],
            price: '$3000 - $5000/Month',
            location: 'Abuja, Nigeria',
            description: [
              'Build and maintain web applications using React.',
              'Collaborate with the design team to implement UI/UX designs.',
            ],
          },
          {
            position: 'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES', 'IT'],
            price: '$5000 - $7000/Month',
            location: 'Lagos, Nigeria',
            description: [
              'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
              'Gain practical experience in digital marketing and social media strategies.',
            ],
          },
          {
            position: 'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES', 'IT'],
            price: '',
            location: 'Lagos, Nigeria',
            description: [
              'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
              'Gain practical experience in digital marketing and social media strategies.',
            ],
          },
          {
            position: 'Software developer intern',
            company: 'Insight Analytics Corp',
            tags: ['SIWES', 'IT'],
            price: '',
            location: 'Lagos, Nigeria',
            description: [
              'Support the marketing team in executing campaigns, conducting market research, and analyzing data.',
              'Gain practical experience in digital marketing and social media strategies.',
            ],
          },
          {
            position: 'Frontend Developer Intern',
            company: 'Tech Solutions Ltd',
            tags: ['Frontend', 'React'],
            price: '$3000 - $5000/Month',
            location: 'Abuja, Nigeria',
            description: [
              'Build and maintain web applications using React.',
              'Collaborate with the design team to implement UI/UX designs.',
            ],
          }
      ];
    
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
            <div className='sticky top-0'>
            <Filter />
            </div>
                
            <div>
            <Offerlist />
            </div>
        </div>
    </section>
  )
}

export default Home
