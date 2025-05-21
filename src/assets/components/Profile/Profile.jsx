import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { updateProfile } from '../../../auth';
import { useAuth } from '../../../AuthProvider';
import Basicinfo from './Basicinfo';
import Analytic from './Analytic';
import About from './About';
import Eduinfo from './Eduinfo';
import Competencies from './Competencies';
import Portfolio from './Portfolio';
import Preference from './Preference';

const Profile = (props) => {
     const {user} = useAuth()
       const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  
  const handleSave = async ({field, data}) => {
        

     const response = await updateProfile(field, data);

     setProfile(response.data.profile)
     
     
      
  }

useEffect(() => {
    axios.get('http://localhost:5000/profile', { withCredentials: true })
      .then(res => {
       
        
        setProfile(res.data.user); // Save user/profile locally
        
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load profile');
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading profile...</p>;
  
  return (
    <section className='px-5 lg:px-25'>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">

            <Basicinfo data={profile.basic_info} onSave={handleSave} />
            <Analytic />
            <About about={user.email} />

        </div>

        {/* col2 */}
        <div className="flex flex-col gap-5">
            <Eduinfo />
            <Competencies data={profile.competencies} onSave={handleSave}/>
            <Portfolio />
            <Preference />




        
        </div>
      </div>
    </section>
    
  )
}

export default Profile
