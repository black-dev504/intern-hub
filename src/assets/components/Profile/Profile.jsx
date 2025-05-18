import React from 'react'
import { useAuth } from '../../../AuthProvider';

const Profile = () => {
     const {user} = useAuth()
  
  return (
    <section className='px-5 lg:px-25'>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">

            <div className="px-5 py-4 rounded-4xl shadow-custom-100">
                <div className="flex justify-between mb-4">
                    <h1 className='text-black font-extrabold text-3xl'>Basic information</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
                </div>
                
                <div className="w-[150px] h-[150px] mb-2 rounded-[50px]">
                    <img src="/images/profilepic.png" alt="" />
                </div>

                <div className="flex flex-col">
                  <h1 className='text-black font-semibold text-4xl'>Oluwaseun Adebayo</h1>
                  <h1 className='text-black text-3xl font-normal my-2'>Professional Title  </h1>
                  <div className='flex mb-2 '>
                      <img src="/icons/Location.svg" alt="" className='mr-3'/>
                       <p className='font-bold text-[16px]' >Lagos Nigeria</p>
                  </div>

                  <div className="mt-8 flex flex-col">
                    <h1 className='text-black font-semibold text-2xl opacity-90'>Contact info</h1>

                        <div className="flex flex-col md:flex-row items-center mt-6">
                          <img className='max-w-20 max-h-20' src="/icons/profileicon.svg" alt="" />
                          <div className="flex flex-col text-left md:pl-4 mt-2 md:mt-0">
                              <h1 className=" opacity-90 text-black font-bold text-xl">Your Profile</h1>
                              <a className="text-[#1976D2] text-[16px] font-bold opacity-90 " href="">internshiphut.com/oluwaseun-adebayo</a>
                          </div>
                        </div>
                       
                        
                      <div className="flex flex-col md:flex-row items-center mt-6">
                          <img className='max-w-20 max-h-20' src="/icons/phoneicon.svg" alt="" />
                          <div className="flex flex-col text-left md:pl-4 mt-2 md:mt-0">
                              <h1 className=" opacity-90 text-black font-bold text-xl">Phone number</h1>
                              <p className="text-black text-[16px] font-bold opacity-90 ">07000000000</p>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center mt-6">
                          <img className='max-w-20 max-h-20' src="/icons/mailicon.svg" alt="" />
                          <div className="flex flex-col text-left md:pl-4 mt-2 md:mt-0">
                              <h1 className=" opacity-90 text-black font-bold text-xl">Email</h1>
                              <a className="text-[#1976D2] text-[16px] font-bold opacity-90 " href="">internshiphut.com/oluwaseun-adebayo</a>
                          </div>
                        </div>
                  </div>
                </div>
                


            </div>

            <div className="px-5 py-4 rounded-4xl shadow-custom-100">
                    <h1 className='text-black mb-4 font-extrabold text-3xl'>Analytics</h1>
                    <div className='flex my-4'>
                        <img src="/icons/analyticicon.svg" alt="eye" />
                        <p className='profile-paragraph ml-1'>12 profile views</p>
                        
                    </div>
                    <p className='text-[14px] text-[#939393]'>Past 7 days</p>
                    <hr className='bg-[#939393]'/>

                    <button className='cursor-pointer max-w-3/10 mx-auto'>
                    <div className='flex mt-2'>
                      <p>Show all analytics</p>
                      <img src="/icons/arrow.svg" className='ml-1' alt="" />
                    </div>
                    </button>
            </div>
            

            <div className="px-5 py-4 rounded-4xl shadow-custom-100">
                <div className="flex justify-between mb-4">
                    <h1 className='text-black font-extrabold text-3xl'>About</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
                </div>
                <input type="textarea" placeholder={user.email}/> 
              </div>
        </div>

        {/* col2 */}
        <div className="flex flex-col gap-5">
          <div className='px-5 py-4 shadow-custom-100'>
             <div className="flex justify-between mb-4">
                    <h1 className='text-black font-extrabold text-3xl'>Educational Background</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
              </div>
              <p className='text-black font-semibold my-4 text-xl opacity-90'>Obafemi awolowo university</p>
              <p className='text-black font-semibold my-4 text-[16px] opacity-90'>Bsc Computer Science</p>
              <p className='text-black font-semibold my-4 text-[16px] opacity-90'>4th Year (Graduating 2026)</p>


          </div>

            <div className='px-5 py-4 shadow-custom-100'>
             <div className="flex justify-between mb-4">
                    <h1 className='text-black font-extrabold text-3xl'>Skills & Competencies</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
              </div>
              <div className="flex flex-col">
              <p className='text-black font-semibold text-xl opacity-90'>Skills</p>
              <div className="skills inline-block mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis voluptates nobis quia. Repudiandae mollitia nostrum eligendi doloribus veritatis at!</div>
              </div>

              <div className="flex flex-col">
              <p className='text-black font-semibold  text-xl opacity-90'>Certificates</p>
              <div className="certificates  mt-3">
                <p>Google ux certification</p>
                <p>Google ux certification</p>


              </div>
              </div>


          </div>

          <div className='px-5 py-4 shadow-custom-100'>
            <div className="flex justify-between mb-4">
                    <h1 className='text-black font-extrabold text-3xl'>Resume & Portfolio</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
                </div>
                <p className='text-black font-semibold opacity-90 text-xl my-5'>Resume: <span ><a className='text-blue-500 underline' href="">Download Resume</a> </span>(Upload/Update)</p>
                <div className='flex flex-col'>
                  <p className='mb-2 text-xl'>Portfolio Links</p>
                  <a className='underline' href="">LinkedIn Profile</a>
                  <a className='underline' href="">LinkedIn Profile</a>
                  <a className='underline' href="">LinkedIn Profile</a>

                </div>
          </div>

          <div className='px-5 py-4 shadow-custom-100'>
            <div className="flex justify-between mb-5 ">
                    <h1 className='text-black font-extrabold text-3xl'>Internship Preferences</h1>
                    <button className='cursor-pointer'><img src="/icons/editicon.svg" alt="" className="w-7 h-7" /></button>
            </div>

            <div className='flex flex-col'>
              <p className=" profile-paragraph">Preferred Industry: Software Development, UI/UX Design</p>
              <p className=" profile-paragraph">Internship Type: Hybrid / Remote</p>

              <p className="profile-paragraph">Availability: April – September 2025</p>

            </div>
          </div>

        
        </div>
      </div>
    </section>
    
  )
}

export default Profile
