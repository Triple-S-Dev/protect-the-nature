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
    <div>
      <h1>User</h1>
      <h3>{profile.email}</h3>
      <h3>{profile.id}</h3>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
