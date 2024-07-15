import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useUpdateProfile = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const updateProfile = async (profileData) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/user/updateProfile`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      // Update the user profile in local storage
      localStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({ type: 'UPDATE_PROFILE', payload: json });

      // Update loading state
      setIsLoading(false);
    }
  };

  return { updateProfile, isLoading, error };
};
