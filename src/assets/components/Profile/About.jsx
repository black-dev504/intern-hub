import { useState } from 'react';

const About = ({ data, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState(data?.about || 'Tell us about yourself');

  const handleChange = (e) => {
    setAbout(e.target.value);
  };

  const handleSave = () => {
    
    onSave({ field: 'about', data:about });
    setIsEditing(false);
  };

  return (
    <div className="px-5 py-4 rounded-4xl shadow-custom-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-black font-extrabold text-3xl">About</h1>
        <button onClick={() => setIsEditing(!isEditing)} className="cursor-pointer">
          <img src="/icons/editicon.svg" alt="Edit" className="w-7 h-7" />
        </button>
      </div>
      {isEditing ? (
        <div className="flex flex-col">
          <textarea
            name="about"
            value={about}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            className="border w-full rounded px-3 py-2"
          />
          <button onClick={handleSave} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      ) : (
        <p>{about}</p>
      )}
    </div>
  );
};

export default About;
