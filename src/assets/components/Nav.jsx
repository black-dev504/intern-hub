import React from 'react';

const Nav = () => {
  return (
    <nav className='bg-white px-25 py-6 flex justify-between items-center primary-font'>
      <div className='flex items-center gap-3'>
        <img src='/icons/logo.svg' alt="logo" className="w-10 h-10" />
        <h1 className='text-black font-bold text-2xl'>Internship Hut</h1>
      </div>
      <div className='flex font-bold primary-font text-black gap-6'>
        <a href="#" className="hover:text-gray-700">Home</a>
        <a href="#" className="hover:text-gray-700">Features</a>
        <a href="#" className="hover:text-gray-700">About us</a>
        <a href="#" className="hover:text-gray-700">Contact us</a>
      </div>
      <div className='flex justify-between font-bold'>
        <button className='px-[35px] py-3 bg-white border-1 border-black rounded-[53px] mr-5  '>Log in </button>
        <button className='px-[35px] py-3 bg-black text-white rounded-[53px]'>Sign up </button>

      </div>
    </nav>
  );  
};

export default Nav;
