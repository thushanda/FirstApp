import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Username validation
    if (username.trim() === '') {
      errors.username = 'Username is required';
      isValid = false;
    }

    // Password validation
    if (password.trim() === '') {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Invalid Password';
      isValid = false;
    }

     // clear errors if valid
     if(username !== ''){
      delete errors.username;
    }

    if(password !== ''){
      delete errors.password;
    }

    // Username and password matching
    if (username !== 'admin' || password !== 'admin1234') {
      errors.notmatching = 'Username and Password do not match!';
      isValid = false;
    }else{
      delete errors.notmatching;
    }

    setErrors(errors);
    return isValid;
  };

  // handle form
  const handleForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/dashboard');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div id='inputs' className='bg-body p-4 rounded w-25 shadow-lg border border-secondary'>
        {/* icon */}
        <div id='icon' className='d-flex justify-content-center mt-3'>
          <i className='fa-solid fa-user fa-2xl'></i>
        </div>
        <h4 className='text-center fs-3 mt-4'>LOG IN</h4>

        <span id='notmatching' className='error d-flex justify-content-center mt-3'>{errors.notmatching}</span>

        {/* Input form */}
        <form onSubmit={handleForm} className='d-flex flex-column p-4'>
          <div className='mb-3'>
            <label htmlFor="username">Username :</label>
            <input
              id='username'
              type='text'
              placeholder='Enter Username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='form-control'
            />
            {errors.username && <span className='error'>{errors.username}</span>}
          </div>

          <div>
            <label htmlFor="password">Password :</label>
            <input
              id='password'
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>
          <div className='d-grid gap-2 col-6 mx-auto mt-2'>
            <button type='submit' className='btn btn-outline-success' id='login'>
              Login
            </button>
          </div>
        </form>
        <div className='d-flex flex-column text-center' id='link'>
          <Link to='/sign_in'>Sign in</Link>
          <Link to='/forget_password'>Forget Password ?</Link>
        </div>
      </div>
    </div>
  );
}
