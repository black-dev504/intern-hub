import { Link } from 'react-router-dom';
import {React, useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav >
      <div className='bg-white lg:px-20 px-5 lg:py-6  flex justify-between items-center primary-font'>
      <div className='flex items-center gap-3'>
        <img src='/icons/logo.svg' alt="logo" className="w-10 h-10" />
        <h1 className='text-black font-bold hidden md:flex text-2xl'>Internship Hut</h1>
      </div>
      <div className='hidden lg:flex font-bold primary-font text-black gap-6'>
        <a href="#" className="hover:text-gray-700">Home</a>
        <a href="#" className="hover:text-gray-700">Features</a>
        <a href="#" className="hover:text-gray-700">About us</a>
        <a href="#" className="hover:text-gray-700">Contact us</a>
      </div>
      <div className='hidden lg:flex justify-between font-bold'>
      <Link to="/login">
          <button className="px-[35px] py-3 bg-white border-1 border-black rounded-[53px] mr-5">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-[35px] py-3 bg-black text-white rounded-[53px]">
            Sign up
          </button>
        </Link>
      </div>

      <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
        </button>

       </div>
       {isMenuOpen && (
          <div className="lg:hidden w-full z-10 absolute bg-[#e3e3e3] text-black px-4 py-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Benefits</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
    </nav>
  );  
};

export default Nav;
