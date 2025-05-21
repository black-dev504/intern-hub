import { useState } from 'react';
import Skillpills from '../Skillpills';

const Competencies = ({ data, onSave }) => {
  const [skills, setSkills] = useState(data.skills || []);
  const [certificates, setCertificates] = useState(data.certificates || []);
  const [isEditing, setIsEditing] = useState(false);
  const [newCert, setNewCert] = useState({ name: '', issuedBy: '', date: '' });

  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const addSkill = (event) => {
    if ((event.key === ' ' || event.key === 'Enter') && event.target.value.trim()) {
      const entry = event.target.value.trim();
      event.target.value = '';
      if (!skills.includes(entry)) {
        setSkills((prev) => [entry, ...prev]);
      }
    }
  };

  const handleCertChange = (e) => {
    const { name, value } = e.target;
    setNewCert((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedCertificates = [...certificates];
    if (newCert.name && newCert.issuedBy && newCert.date) {
      updatedCertificates.push(newCert);
    }

    const form = {
      skills,
      certificates: updatedCertificates,
    };
    
    

    onSave({field:'competencies', data:form});
    setCertificates(updatedCertificates);
    setNewCert({ name: '', issuedBy: '', date: '' });
    setIsEditing(false);
  };

  return (
    <div className='px-5 py-4 shadow-custom-100'>
      <div className="flex justify-between mb-4">
        <h1 className='text-black font-extrabold text-3xl'>Skills & Competencies</h1>
        <button onClick={() => setIsEditing(!isEditing)} className="cursor-pointer">
          <img src="/icons/editicon.svg" alt="Edit" className="w-7 h-7" />
        </button>
      </div>

      {isEditing ? (
        <EditMode
          skills={skills}
          newCert={newCert}
          handleCertChange={handleCertChange}
          addSkill={addSkill}
          save={handleSave}
          removeSkill={removeSkill}
          isEditing={isEditing}
        />
      ) : (
        <div>
          <div className="flex flex-col">
            <p className='text-black font-semibold text-xl opacity-90'>Skills</p>
            <div className="skills inline-block mt-3">
              {skills.length > 0 ? skills.map((skill, index) => (
                <Skillpills skill={skill} key={index} onRemove={removeSkill} edit={isEditing}/>
              )) : <p>No skill added</p>}
            </div>
          </div>

          <div className="flex flex-col">
            <p className='text-black font-semibold text-xl opacity-90'>Certificates</p>
            <div className="certificates mt-3">
              {certificates.length > 1 ? certificates.map((cert, index) => (
                <p className='pl-3' key={index}><span className='font-bold'>{cert.name}</span> | <span className='italic'>{cert.issuedBy}</span> | {cert.date}</p>
              )) : <p>No certificate added</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EditMode = ({ skills, newCert, handleCertChange, addSkill, save, removeSkill, isEditing }) => (
  <div>
    <div className="flex flex-col">
      <p className='text-black font-semibold text-xl opacity-90'>Skills</p>
      <input
        type="text"
        placeholder='Type skill and press space or enter'
        className="border w-full rounded px-3 py-1"
        onKeyDown={addSkill}
      />
      <div className="skills inline-block mt-3">
        {skills.length > 0 ? skills.map((skill, index) => (
          <Skillpills skill={skill} key={index} onRemove={removeSkill} edit={isEditing}/>
        )) : <p>No skill added</p>}
      </div>
    </div>

    <div className="flex flex-col gap-3 mt-6">
      <div className='w-full'>
        <label className='block italic font-semibold text-xl'>Name</label>
        <input name="name" value={newCert.name} onChange={handleCertChange} placeholder="Certificate Title" className="border w-full rounded px-3 py-1" />
      </div>
      <div className='w-full'>
        <label className='block italic font-semibold text-xl'>Issued By</label>
        <input name="issuedBy" value={newCert.issuedBy} onChange={handleCertChange} placeholder="Issuing Organization" className="border w-full rounded px-3 py-1" />
      </div>
      <div className='w-full'>
        <label className='block italic font-semibold text-xl'>Issue Date</label>
        <input name="date" value={newCert.date} onChange={handleCertChange} placeholder="Date" className="border w-full rounded px-3 py-1" />
      </div>
    </div>

    <button onClick={save} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
  </div>
);

export default Competencies;
