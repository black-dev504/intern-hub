import React, { useRef, useEffect, useState } from 'react';
import { getProfile as profile } from '../../../auth';
import { useNavigate } from 'react-router-dom';

const Menubox = (props) => {

const navigate = useNavigate();

const menuRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {        
      props.setIsProfileOpen(false); 
    }
  };

    document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedowns', handleClickOutside);
  };
}, []);

    const getProfile = async () => {
        
       try {

               const response = await profile(props.userData); 
                props.setIsProfileOpen(false);               
                navigate('/profile');
           } catch (err) {
               const message = err?.response?.data?.error || 'Login failed';
               console.error(message);
           }
        }

  return (
    <div>

     <div ref={menuRef} className=" absolute rounded-3xl mr-20 min-w-[300px] z-10 right-[0] bg-[#e3e3e3] text-black ">
            <ul className="flex flex-col space-y-2">
              <li className='py-5 px-5 mt-2 font-medium text-black text-2xl hover:bg-secondary '>
                <button onClick={()=>getProfile(props.userData)} className=''>Profile</button>
              </li>
              <li className='py-5 px-5 font-medium text-black text-2xl hover:bg-secondary '>
                <a href="">Saved Internships</a>
              </li>
              <li className='py-5 px-5 font-medium text-black text-2xl hover:bg-secondary '>
                <a href="">Application</a>
              </li >
              <li className='py-5 px-5 font-medium text-black text-2xl hover:bg-secondary ' >
                <a href="">Recently Viewed</a>
              </li>
              <li className='py-5 px-5 font-medium text-black text-2xl hover:bg-secondary '>
                <a href="/contact">Notification</a>
              </li>
                <li className='py-5 px-5 mb-2 font-medium text-black text-2xl hover:bg-secondary '>
                <a href="/contact">Setting</a>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Menubox
