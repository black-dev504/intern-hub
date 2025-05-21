import React, { useState } from 'react';

const Eduinfo = ({ data, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(data || {
    school: '',
    course: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave('edu', form);  // ⬅️ Save using field identifier "edu"
    setIsEditing(false);
  };

  return (
    <div className='px-5 py-4 shadow-custom-100 rounded-4xl'>
      <div className="flex justify-between mb-4">
        <h1 className='text-black font-extrabold text-3xl'>Educational Background</h1>
        <button onClick={() => setIsEditing(!isEditing)} className='cursor-pointer'>
          <img src="/icons/editicon.svg" alt="Edit" className="w-7 h-7" />
        </button>
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-3">
          <div>
            <label className='block italic font-semibold text-xl mb-1'>School</label>
            <input
              name="school"
              value={form.school}
              onChange={handleChange}
              placeholder="School Name"
              className="border w-full rounded px-3 py-1"
            />
          </div>
          <div>
            <label className='block italic font-semibold text-xl mb-1'>Course</label>
            <input
              name="course"
              value={form.course}
              onChange={handleChange}
              placeholder="Course of Study"
              className="border w-full rounded px-3 py-1"
            />
          </div>
          <div>
            <label className='block italic font-semibold text-xl mb-1'>Year</label>
            <input
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="e.g. 4th Year (Graduating 2026)"
              className="border w-full rounded px-3 py-1"
            />
          </div>
          <button
            onClick={handleSave}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p className='text-black font-semibold my-4 text-xl opacity-90'>
            {form.school?.trim() || <span className="text-[#939393] italic">School: unknown</span>}
          </p>
          <p className='text-black font-semibold my-4 text-[16px] opacity-90'>
            {form.course?.trim() || <span className="text-[#939393] italic">Course: unknown</span>}
          </p>
          <p className='text-black font-semibold my-4 text-[16px] opacity-90'>
            {form.year?.trim() || <span className="text-[#939393] italic">Year: unknown</span>}
          </p>
        </div>
      )}
    </div>
  );
};

export default Eduinfo;

