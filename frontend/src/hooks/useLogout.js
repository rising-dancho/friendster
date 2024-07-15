import { useAuthContext } from './useAuthContext';

export function useLogout() {
  const { dispatch } = useAuthContext;

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user');

    // dispatch a logout action
    dispatch({ type: 'LOGOUT' });
  };
  return { logout };
}
