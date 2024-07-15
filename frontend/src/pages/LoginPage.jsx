import React, { useState, useEffect } from 'react';
import ProfilePage from '../pages/ProfilePage';
import Access from '../components/Access';

function HomePage() {
  const [showProfile, setShowProfile] = useState(false);
  const localSignUp = localStorage.getItem('user');

  useEffect(() => {
    if (localSignUp) {
      setShowProfile(true);
    }
  }, [localSignUp]);

  return <div>{showProfile ? <ProfilePage /> : <Access />}</div>;
}

export default HomePage;
