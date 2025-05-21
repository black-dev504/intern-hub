import React, { useState } from 'react';

const Basicinfo = ({ data, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;

      setForm((prev) => ({ ...prev, [name]: value }));
    
  };

  const handleSave = () => {    
    onSave({field:'basic_info', data:form});
    setIsEditing(false);
  };

  return (
    <div className="px-5 py-4 rounded-4xl shadow-custom-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-black font-extrabold text-3xl">Basic information</h1>
        <button onClick={() => setIsEditing(!isEditing)} className="cursor-pointer">
          <img src="/icons/editicon.svg" alt="Edit" className="w-7 h-7" />
        </button>
      </div>

      <div className="w-[150px] h-[150px] mb-2 rounded-[50px]">
        <img src="/images/profilepic.png" alt="Profile" />
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-3">
          <div className='w-full'>
            <label className='block italic font-semibold text-xl mb-2'>Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border w-full rounded px-3 py-1" />
          </div>


          <div className='w-full'>

            <label className='block italic font-semibold text-xl'>Professional title</label>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Professional Title" className="border w-full rounded px-3 py-1" />
         </div>

        <div className='w-full'>
          <label className='block italic font-semibold text-xl'>Location</label>
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border w-full rounded px-3 py-1" />
        </div>

        <div className='w-full'>
          <label className='block italic font-semibold text-xl'>Profile link</label>
          <input name="profile_link" value={form.profile_link} onChange={handleChange} placeholder="Profile link" className="border w-full rounded px-3 py-1" />
        </div>

        <div className='w-full'>
          <label className='block italic font-semibold text-xl'>Telephone</label>
          <input name="number" value={form.number} onChange={handleChange} placeholder="Telephone" className="border w-full rounded px-3 py-1" />
        </div>

        <div className='w-full'>
          <label className='block italic font-semibold text-xl'>Email</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border w-full rounded px-3 py-1" />
        </div>

          <button onClick={handleSave} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-black font-semibold text-4xl">
            {data.name || <span className="text-[#939393] italic text-2xl">Name: unknown</span>}
          </h1>
          <h1 className="text-black text-3xl font-normal my-2">
            {data.title || <span className="text-[#939393] italic text-2xl">Professional title: unknown</span>}
          </h1>
          <div className="flex mb-2">
            <img src="/icons/Location.svg" alt="" className="mr-3" />
            <p className="font-bold text-[16px]">
              {data.location || <span className="text-[#939393] italic text-2xl">Location: unknown</span>}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <ContactInfo
              icon="/icons/profileicon.svg"
              label="Your Profile"
              value={data.profile_link}
              type="link"
            />
            <ContactInfo
              icon="/icons/phoneicon.svg"
              label="Phone number"
              value={data.number}
              type="text"
            />
            <ContactInfo
              icon="/icons/mailicon.svg"
              label="Email"
              value={data.email}
              type="link"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ContactInfo = ({ icon, label, value, type }) => (
  <div className="flex flex-row items-center">
    <img className="max-w-20 max-h-20" src={icon} alt={label} />
    <div className="flex flex-col text-left pl-4 mt-2 md:mt-0">
      <h1 className="opacity-90 text-black font-bold text-xl">{label}</h1>
      {type === 'link' ? (
        <a href={value || '#'} className="text-[#1976D2] text-[16px] font-bold opacity-90">
          {value || <span className="text-[#939393] italic text-xl">Unknown</span>}
        </a>
      ) : (
        <p className="text-black text-[16px] font-bold opacity-90">
          {value || <span className="text-[#939393] italic text-xl">Unknown</span>}
        </p>
      )}
    </div>
  </div>
);

export default Basicinfo;
