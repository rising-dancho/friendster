import React, { useState } from 'react';
import countries from './imports/countries.js';
import { NavLink } from 'react-router-dom';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import { useSignup } from '../hooks/useSignUp.js';

function Register() {
  const initialFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    country: '',
  };

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const { signup, isLoading, error } = useSignup();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await signup(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
        values.dob,
        values.gender,
        values.country
      );

      setValues(initialFormValues);
      toast.success('Success!', {
        style: { padding: '10px' },
        description: 'Account created successfully.',
      });
    } catch (error) {
      toast.error('Error!', {
        style: { padding: '10px' },
        description: error.message,
      });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = (values) => {
    const errors = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <div className="Register">
      <Toaster expand={true} position="top-center" richColors closeButton />
      <div className="sub-heading sub-heading--blue">Join Friendster</div>
      <form onSubmit={onSubmitHandler} className="form-container">
        <label className="input-title" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`inputs ${errors.email ? 'error' : ''}`}
          onChange={onChangeHandler}
          value={values.email}
          required
        />
        <label className="input-title" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="inputs"
          onChange={onChangeHandler}
          value={values.password}
          required
        />
        <label className="input-title" htmlFor="confirmPassword">
          Re-enter password:
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="inputs"
          onChange={onChangeHandler}
          value={values.confirmPassword}
          required
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
        <label className="input-title" htmlFor="firstName">
          First Name:
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="inputs"
          onChange={onChangeHandler}
          value={values.firstName}
          required
        />
        <label className="input-title" htmlFor="lastName">
          Last Name:
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="inputs"
          onChange={onChangeHandler}
          value={values.lastName}
          required
        />
        <label className="input-title" htmlFor="dob">
          Date of Birth:
        </label>
        <input
          id="dob"
          name="dob"
          type="date"
          className="inputs"
          onChange={onChangeHandler}
          value={values.dob}
          required
        />

        {/* radio buttons */}
        <fieldset className="genders-container">
          <span className="input-title">Gender:</span>
          <div>
            <div className="detail-gender">
              <input
                id="male"
                type="radio"
                value="Male"
                name="gender"
                onChange={onChangeHandler}
                checked={values.gender === 'Male'}
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="detail-gender">
              <input
                id="female"
                type="radio"
                value="Female"
                name="gender"
                onChange={onChangeHandler}
                checked={values.gender === 'Female'}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </fieldset>

        <label className="inputs" htmlFor="country">
          Country:
        </label>
        <select
          className="inputs"
          id="country"
          name="country"
          onChange={onChangeHandler}
          value={values.country}
          required
        >
          {countries.map((item, i) => (
            <option value={item.value} key={i}>
              {item.country}
            </option>
          ))}
        </select>

        <button className="blueBigButton btn-normal" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        <small>
          By clicking the "Register" button you agree to Friendster's{' '}
          <NavLink to="#">terms of service</NavLink> , and certify that you are
          over 16 years of age.
        </small>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Register;
