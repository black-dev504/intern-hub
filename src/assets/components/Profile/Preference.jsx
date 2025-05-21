import React from 'react'

export default function Preference() {
  return (
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
  )
}
