import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../Styles/signin.css';

export default function Sign_in() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [selectDate, setSelectDate] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // handle form
  const handleSignForm = (e) => {
    e.preventDefault();

    let isValidate = true;
    const errors = {};

    // first_name
    if (first_name.trim() === '') {
      errors.first_name = 'First Name is required!';
      isValidate = false;
    }

    // Last name 
    if (last_name.trim() === '') {
      errors.last_name = 'Last Name is required!';
      isValidate = false;
    }

    // Email
    if (email.trim() === '') {
      errors.email = 'Email is required';
      isValidate = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
      isValidate = false;
    }

    // birthday
    if (!birthday) {
      errors.birthday = 'Birthday is required';
      isValidate = false;
    }

    // Password
    if (password === '') {
      errors.password = 'Password is required';
      isValidate = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValidate = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(password)) {
      errors.password = 'Password must contain at least one letter, one number, and one special character';
      isValidate = false;
    }

    // Confirm password
    if (confirm_password === '') {
      errors.confirm_password = 'Confirm Password is required';
      isValidate = false;
    } else if (password !== confirm_password) {
      errors.confirm_password = 'Passwords do not match';
      isValidate = false;
    }

    if (isValidate) {
      setSuccessMessage('Signin Successful');
    } else {
      setErrors(errors);
    }
  };

  // date select
  const toggleDatePicker = () => {
    setSelectDate(!selectDate);
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 container'>
      <div className='row border bg-body rounded shadow-lg g-0'>
        <div className='col-lg-6 d-flex  left-box'>
          <img
            src='https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448792.jpg?w=740&t=st=1687697208~exp=
            1687697808~hmac=99bd019fc41f6d9389842ef962a64e7edbb255b9dca9e36ce72891b13e8a72a6'
            alt='Your Image'
            className='img-fluid'
            id='img'
          />
        </div>
        <div className='p-3 rounded w-55 p-3 mb-5 col-lg-6'>
          <h4 className='text-center mb-5 mt-3 fw-bold'>SIGN IN</h4>
          {successMessage && <span id='success' className='success d-flex justify-content-center mt-3'>{successMessage}</span>}
          {/* Sign in form */}
          <form onSubmit={handleSignForm}>
            {/* First name */}
            <div className='mb-3'>
              <label htmlFor='first_name'>First Name:</label>
              <input
                type='text'
                name='first_name'
                id='first_name'
                placeholder='First Name'
                className='form-control'
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.first_name && <span className='error'>{errors.first_name}</span>}
            </div>

            {/* Last name */}
            <div className='mb-3'>
              <label htmlFor='last_name'>Last Name:</label>
              <input
                type='text'
                name='last_name'
                id='last_name'
                placeholder='Last Name'
                className='form-control'
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.last_name && <span className='error'>{errors.last_name}</span>}
            </div>

            {/* Email */}
            <div className='mb-3'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className='error'>{errors.email}</span>}
            </div>

            {/* Birthday */}
            <div className='mb-3'>
              <label htmlFor='birthday' className='me-2'>
                Birthday:
              </label>
              <div className='input-group'>
                <DatePicker
                  selected={birthday}
                  onChange={(date) => setBirthday(date)}
                  dateFormat='MM-dd-yyyy'
                  placeholderText='Select birthday'
                  className='form-control w-10'
                  id='birthday'
                  open={selectDate}
                  onClickOutside={() => setSelectDate(false)}
                />
                <span className='input-group-text' onClick={toggleDatePicker}>
                  <BiCalendar />
                </span>
              </div>
              {errors.birthday && <span className='error'>{errors.birthday}</span>}
            </div>

            {/* Password */}
            <div className='mb-3'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className='error'>{errors.password}</span>}
            </div>

            {/* Confirm password */}
            <div className='mb-3'>
              <label htmlFor='confirm_password'>Confirm Password:</label>
              <input
                type='password'
                name='confirm_password'
                id='confirm_password'
                placeholder='Confirm Password'
                className='form-control'
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirm_password && <span className='error'>{errors.confirm_password}</span>}
            </div>

            {/* Button */}
            <div className='d-grid gap-2 col-6 mx-auto'>
              <button className='btn btn-outline-primary mt-3' type='submit'>
                Sign in
              </button>
            </div>

            {/* Login form link */}
            <div className='d-flex justify-content-center mt-4'>
              <p className='me-2'>Already have an account?</p>
              <Link to='/'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
