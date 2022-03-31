import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const profileData = await supabase.auth.user();
    if (!profileData) {
      history('/signin');
    } else {
      setProfile(profileData);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    history('/signin');
  };

  if (!profile) return null;

  return (
    <div className='h-100'>
      <div className='profiles'>
        <h1>User Profile</h1>
        <table>
          <tbody>
            <tr>
              <td>User Email</td>
              <td>: {profile.email}</td>
            </tr>
            <tr>
              <td>User ID</td>
              <td>: {profile.id}</td>
            </tr>
            <tr>
              <td>
                <button className='signoutButton' onClick={signOut}>
                  Sign out
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
