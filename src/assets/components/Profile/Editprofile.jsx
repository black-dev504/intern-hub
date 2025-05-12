import React from 'react'
import Skillpills from '../Skillpills'


const Editprofile = () => {
    const skills = ['html', 'css', 'js']
  return (
    <section className='bg-white px-30 py-15'>
        <div className='flex flex-col items-center'>
            <div className="w-[150px] h-[150px] rounded-[50px]">
                <img src="/images/profilepic.png" alt="" />
            </div>
            <a href=" " className='font-normal text-xl mt-2 text-black hover:text-blue-500 hover:underline'>Edit Profile</a>

            <div className='mt-10 flex flex-col  justify-center w-full'>
                <div className='profile-header  justify-start flex flex-col '>
                    <h1 className='text-black text-left font-bold text-3xl'>Profile header</h1>
                    <div className='grid lg:grid-cols-2 gap-3 mt-3 '>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Name</label>
                        <input type="text" name="username" id="" placeholder='Name' className='w-full rounded-xl border-1 border-[#939393] py-4 px-6' />
                    </div>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Email Address</label>
                        <input type="text" name="email" id="" placeholder='olusegun@gmail.com' className='w-full rounded-xl border-1 border-[#939393] py-4 px-6' />
                    </div>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Professional Title</label>
                        <input type="text" name="title" id="" placeholder='Aspiring developer' className='w-full rounded-xl border-1 border-[#939393] py-4 px-6' />
                    </div>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Phone Number</label>
                        <input type="number" name="number" id="" placeholder='+234 814000000' className='w-full rounded-xl border-1 border-[#939393] py-4 px-6' />
                    </div>
                    </div>
                </div>

                <div className='prof-summary flex flex-col mt-3 '>
                    <h1 className='text-black text-left font-bold text-3xl'>Professional Summary</h1>
                    <p className='mt-4 mb-4 text-2xl font-medium'>About me</p>
                    <textarea name="about" className='border-1 border-[#939393] px-6 py-4 rounded-xl' placeholder='write about yourself' rows={4} id=""></textarea>
                    <div>
                        <p className=' font-medium text-2xl mt-3'>Skills</p>
                        <div className='ml-3 mt-4 inline-block'>
                            {skills.map((skill,index)=><Skillpills skill={skill} />)}
                        </div>
                    </div>
                </div>

                <div className='mt-3 flex flex-col '>
                <h1 className='text-black text-left font-bold text-3xl'>Academic Information</h1>
                <div className='grid lg:grid-cols-2 gap-3 mt-3 '>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Current Institution</label>
                        <input type="text" name="username" id="" placeholder='Obafemi Awolowo Univeersity' className='w-full rounded-xl border-1 border-[#939393] py-4 px-6' />
                    </div>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Course of Study</label>
                        <input type="text" name="email" id="" placeholder='Computer Science' className='w-full rounded-xl border-1 border-[#939393] py-4 px-6' />
                    </div>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Year of Study</label>
                        <input type="text" name="title" id="" placeholder='3rd year' className='w-full rounded-xl border-1 border-[#939393] py-4 px-6' />
                    </div>

                    <div>
                        <label htmlFor="" className='block font-medium text-2xl mb-4'>Internship Type</label>
                        <select
                                name="internshipType"
                                id="internshipType"
                                className="w-full rounded-xl border-1 border-[#939393] py-4 px-6"
                            >
                                <option value="" disabled selected>
                                Select Internship Type
                                </option>
                                <option value="siwes">SIWES</option>
                                <option value="it">IT</option>
                                <option value="remote">Remote</option>
                                <option value="on-site">On-Site</option>
                            </select>                    
                        </div>
                </div>
                </div>

                <div className='w-full items-center flex'>
                    <button className='rounded-[20px] px-6 py-4 bg-blue-500 text-white max-w-6/10 mt-4 '>Save Changes</button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Editprofile
