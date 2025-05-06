import React from 'react';
import Icons from './Icons';

const Cta = () => {
    const student = [
        {
            icon: '/icons/Login.svg',
            label: 'Sign up/Log in',
        },
        {
            icon: '/icons/job.svg',
            label: 'Find tailored opportunities',
        },
        {
            icon: '/icons/Checked.svg',
            label: 'Apply with no hassle',
        },
        {
            icon: '/icons/List.svg',
            label: 'Manage jobs',
        },
    ];

    const teachers = [
        {
            icon: '/icons/Login.svg',
            label: 'Sign up/Log in',
        },
        {
            icon: '/icons/add.svg',
            label: 'Post opportunities',
        },
        {
            icon: '/icons/List.svg',
            label: 'Manage list',
        },
        {
            icon: '/icons/Partnership.svg',
            label: 'Hire Students',
        },
    ];


    return (
        <div>
        <section className="bg-secondary ">
                        <div className=" bg-white px-25 opacity-85 z-0">

            <div className="flex flex-col items-center max-[1000px] mx-auto">
                <h1 className="font-bold text-5xl mt-6 mb-14">How It Works</h1>
                <h1 className="text-4xl font-bold">For Students</h1>
                <div className="grid gap-30 grid-cols-2 md:grid-cols-4 my-16">
                    {student.map((data, index) => (
                        <Icons icon={data.icon} label={data.label} key={index} />
                    ))}
                </div>

                <button className='border-1 border-primary-color rounded-[53px] my-13 py-4 px-6 font-bold text-xl hover:bg-black hover:text-white '>Find IT placements</button>
            </div>
            </div>
        </section>



        <section className="bg-white ">

            <div className="flex flex-col items-center max-[1000px] mx-auto">
                <h1 className="text-4xl mt-8 font-bold">For Teachers</h1>
                <div className="grid gap-30 grid-cols-2 md:grid-cols-4 my-16">
                    {teachers.map((data, index) => (
                        <Icons icon={data.icon} label={data.label} key={index} />
                    ))}
                </div>

                <button className='bg-black text-white rounded-[53px] my-13 py-4 px-6 font-bold text-xl hover:bg-white hover:text-black hover:border-1 border-primary-color '>Upload Oppurtunities</button>
            </div>
        </section>
        </div>
    );
};

export default Cta;