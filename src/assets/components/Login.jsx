import React from 'react'

const Login = () => {
  return (
    <section className='grid grid-cols-2'>
        <div className='py-12 px-6 h-[100vh]'>
            <p className='justify-end removable flex'>Have an account?<span className='font-bold text-primary-color'><a href="">Log in</a></span></p>
            <div className='mx-20 my-30 flex flex-col'>
                <div>
                <h1 className='text-black font-bold text-4xl'>Get Started!</h1>
                <p className='mt-2 removable'>Create a free account</p>
                </div>

                <div className='mt-5 flex flex-col min-h-[350px] justify-between'>
                    <div className='relative'>
                        <input type="text" className='w-full border-1 pl-2 py-3 rounded-[4px] removable' placeholder='example@email.com'/>
                        <label className=" text-[#192c26] absolute bottom-10 left-4 px-2 font-normal text-[16px] bg-white block" htmlFor="email">Email</label>

                    </div>

                    <div className='relative'>
                        <input type="text" className='w-full border-1 pl-2 py-3 rounded-[4px] removable' placeholder='6+ strong password'/>
                        <label className="absolute bottom-10 left-4 px-2 font-normal text-[16px] bg-white block" htmlFor="password">Password</label>

                    </div>

                    <div className='relative'>
                        <input type="text" className='w-full border-1 pl-2 py-3 rounded-[4px] removable' placeholder='Mention your skills'/>
                        <label className="absolute bottom-10 left-4 px-2 font-normal text-[16px] bg-white block" htmlFor="skills">Skills</label>

                    </div>
                    
                    
                    <button className='w-full py-5 rounded-[4px] bg-black text-white'>Create an account</button>
                </div>
            </div>
        </div>

        <div className='primary-color min-w-[650px] h-[100vh]'>
            <h1 className='mt-17 font-extrabold text-5xl max-w-[600px] mx-auto text-[#BFD6C9]'>Verified Companies & Safe Applications.</h1>        
        
        <img className="mt-24" src="/images/login.png" alt="loginimg" />
        
        </div>

    </section>
      
  )
}

export default Login
