import React from 'react'


const Contact = () => {
  return (
    <div>
      <section className='md:px-20 md:pt-16 md:pb-24 '>

<div className="grid lg:grid-cols-2 bg-white px-8">
  <div className='flex flex-col md:px-12 py-10'>
    <div className='md:mb-12'>
  <h1 className='text-gray-900 font-semibold text-4xl mb-5'>Get in touch</h1>
  <p className='text-gray-500 font-normal mb-4 md:mb-0'>Our friendly team would love to hear from you.</p>
  </div>

  <form action="">
<div className="flex space-x-6 mb-6">
{/* First Name Input */}
<div className="w-1/2">
<label
  htmlFor="first-name"
  className="block text-gray-500 text-[14px] mb-2"
>
  First Name
</label>
<input
  type="text"
  placeholder='First name'
  id="first-name"
  className="border-1 border-gray-300 rounded-[8px] px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>

{/* Last Name Input */}
<div className="w-1/2">
<label
  htmlFor="last-name"
  className="block text-gray-500 text-[14px] mb-2"
>
  Last Name
</label>
<input
placeholder='Last name'
  type="text"
  id="last-name"
  className="border-1 border-gray-300 rounded-[8px] px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>
</div>

<div className="mb-6">
<label
htmlFor="email"
className="block text-gray-500 text-[14px] mb-2"
>
Email
</label>
<input
placeholder='your@email.com'
type="email"
id="email"
className="border-1 border-gray-300 rounded-[8px] px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>

<div className="mb-6">
<label

htmlFor="phone"
className="block text-gray-500 text-[14px] mb-2"
>
Phone number
</label>
<input
placeholder='0000-0000'
type="phone"
id="email"
className="border-1 border-gray-300 rounded-[8px] px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>


<div className="mb-6">
<label
htmlFor="message"
className="block text-gray-500 text-[14px] mb-2"
>
Message
</label>
<textarea
placeholder='Type your message here...'
id="message"
rows="4"
className="border-2 border-gray-300 rounded-[20px] px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>
</div>
<div>
<input type="checkbox" id="checkbox" />
<label htmlFor="checkbox" className="text-gray-500 text-[14px] ml-2">
You agree to our friendly <span className='text-[#1C3FAA]'>Privacy policy.</span>
</label>
</div>
<button className="bg-[#1C3FAA] w-full text-white rounded-[100px] px-7 py-3 mt-6">
Submit
</button>
</form>
  </div>
  <div>
    <img className='h-full' src='/images/contactpic.png' alt="" />
  </div>
</div>
</section>

    </div>
  )
}

export default Contact
