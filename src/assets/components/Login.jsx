import React from 'react'
import { useLocation } from 'react-router-dom';
import Skillpills from './Skillpills';


const Login = () => {
    const location = useLocation();
    let signup = true
    if( location.pathname === '/login'){
        signup = false
    }
    const [data, setData] = React.useState({
        email:'',
        password:'',
        skills: []
    })
    function addSkill(event) {
        if ((event.key === ' ' || event.key === 'Enter') && event.target.value.trim()) {
            const entry = event.target.value.trim(); 
            event.target.value = ''; 
        setData((prevValue) => {
            if (!prevValue.skills.includes(entry)) {
                return {
                    ...prevValue,
                    skills: [entry, ...prevValue.skills],
                };
            }
            return prevValue;
        });
        }
    }

    function removeSkill(skillToRemove){

        setData((prevValue)=>{
            return {
                email: prevValue.email,
                password: prevValue.password,
                skills: data.skills.filter((skill)=>(skill != skillToRemove))
                
            }

        }
        )
       
    }
    
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='py-12 px-6 '>
            {signup?            
             <p className='justify-end removable flex'>Have an account?<span className='font-bold text-primary-color'><a href="/login">Log in</a></span></p>:
             <p className='justify-end removable flex'>Dont have an account?<span className='font-bold text-primary-color'><a href="/signup">Sign up</a></span></p>

 }
            <div className='md:mx-10 my-10 lg:my-30 flex flex-col'>
               {signup?<div>
                <h1 className='text-black font-bold text-4xl'>Get Started!</h1>
                <p className='mt-2 removable'>Create a free account</p>
                </div>:
                
                <div>
                <h1 className='text-black font-bold text-4xl'>Welcome back!</h1>
                <p className='mt-2 removable'>Log in</p>
                </div>}
               
            

                <div className='mt-5 flex flex-col justify-between'>
                    <div className='relative'>
                        <input type="text" className='w-full mb-8 border-1 border-[#939393] pl-2 py-3 rounded-[4px] removable' placeholder='example@email.com'/>
                        <label className=" text-[#192c26]  absolute bottom-18 left-4 px-2 font-normal text-[16px] bg-white block" htmlFor="email">Email</label>

                    </div>
                   {signup? null:<div className=' justify-end flex'>
                        <a href="" className='hover:underline hover:text-blue-500 text-black mb-2'>Forgot Password?</a>
                    </div>}
                    <div className='relative'>
                        <input type="text" className='w-full border-[#939393] mb-8 border-1 pl-2 py-3 rounded-[4px] removable' placeholder='6+ strong password'/>
                        <label className="absolute bottom-18 left-4 px-2 font-normal text-[16px] bg-white block" htmlFor="password">Password</label>

                    </div>

                    {signup? <div className='relative'>
                        <input type="text" onKeyDown={addSkill} className='w-full mb-8 border-[#939393] border-1 pl-2 py-3 rounded-[4px] removable' placeholder='Mention your skills'/>
                        <label className="absolute bottom-18 left-4 px-2 font-normal text-[16px] bg-white block" htmlFor="skills">Skills</label>

                    </div>:null}
                    <div className='inline-block mb-3'>
                    {data.skills.map((skill,index) =>(
                      <Skillpills skill={skill} key={index} onRemove={removeSkill}/> 

                    ))}
                     </div>
                   
                    {signup?   <button className='w-full mb-6 cursor-pointer py-5 rounded-[4px] bg-black text-white'>Create an account</button>:
                            <button className='w-full mb-6 cursor-pointer py-5 rounded-[4px] bg-black text-white'>Log in</button>
}
                    

    
                    {signup? <div className='border-t-1  border-[#939393] relative'>
                        <p className='absolute right-[35%]  -bottom-3 font-normal removable block bg-white px-2 '>Or sign up with</p>
                    </div>:
                    <div className='border-t-1  border-[#939393] relative'>
                        <p className='absolute right-[35%]  -bottom-3 font-normal removable block bg-white px-2 '>Or log in with</p>
                    </div>}

                    <div className='grid grid-cols-3 gap-8 mt-5  justify-between mx-auto'>
                            <div className='flex justify-content px-8 py-4 border-[0.5px] border-[#939393] rounded-[2px] items-center'>
                            <img className='w-[32px] h-[32px]' src="/icons/google.svg" alt="" />
                            </div>

                            <div className='flex justify-content px-8 py-4 border-[0.5px] border-[#939393]  rounded-[2px] items-center'>
                                <img className='w-[32px] h-[32px]' src="/icons/facebook.svg" alt="" />
                            </div>

                            <div className='flex justify-content px-8 py-4 border-[0.5px] border-[#939393]  rounded-[2px] items-center'>
                                <img className='w-[32px] h-[32px]' src="/icons/apple.svg" alt="" />
                            </div>

                    </div>
                    <p className='mt-8 removable text-[12px] '>by confirming the processing, I accept the <span className='text-blue'> <a className='text-blue-500 underline' href="">terms of the user</a> </span> and <span className='text-blue'> <a className='cursor-pointer text-blue-500 hover:text-blue-700 underline' href="">privacy policy agreeement</a> </span>   </p>


                </div>
            </div>
        </div>

        {signup?<div className='primary-color lg:min-w-[650px] '>
            <h1 className='mt-17 px-10 font-extrabold text-4xl max-w-[600px] mx-auto text-[#BFD6C9]'>Verified Companies & Safe Applications.</h1>        
       <div className='w-full'>
        <img className="md:mt-24 pb-20 object-contain overflow-hidden " src="/images/signup.png" alt="loginimg" />
        </div>
        </div>: 
        <div className='primary-color min-w-[650px] '>
        <h1 className='mt-17 px-10 font-extrabold text-4xl max-w-[600px] mx-auto text-[#BFD6C9]'>Find IT placements easily.</h1>        
    
    <img className="md:mt-24 pb-20" src="/images/login.png" alt="loginimg" />
    
    </div>}

    </section>
      
  )
}

export default Login
