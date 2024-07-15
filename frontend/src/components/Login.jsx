import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
// source: https://sonner.emilkowal.ski/toast

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await login(email, password);
    navigate('/profile');
  };

  return (
    <div className="Login">
      <Toaster expand={true} position="top-center" richColors closeButton />
      <div className="login-container">
        <div className="sub-heading sub-heading--white">Log In</div>

        <form onSubmit={onSubmitHandler} className="login-form">
          <label htmlFor="email-login">Email: </label>
          <input
            id="email-login"
            type="email"
            name="email"
            className="inputs"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label htmlFor="password-login">Password: </label>
          <input
            id="password-login"
            type="password"
            name="password"
            className="inputs"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button disabled={isLoading} className="greyButton btn-normal">
            Log In
          </button>
          <a href="#">Forgot password?</a>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
