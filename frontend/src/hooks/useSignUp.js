import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    email,
    password,
    firstName,
    lastName,
    birthday,
    gender,
    country
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/user/signup`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          birthday,
          gender,
          country,
        }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
