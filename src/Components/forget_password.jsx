import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Forget_password() {
  const [email,setEmail] = useState('');
  const [error, setErrors] = useState({});
  const [successMessage , setSuccessMessage] = useState();

  // reset button
  const handleResetForm = (e) =>{
    e.preventDefault();

    let isValid = true;
    const error = {};

    if(email.trim() === ''){
      error.email = 'Please Enter Your email!';
      isValid = false;
    }else if(!/\S+@\S+\.\S+/.test(email)){
      error.email = 'Invalid Email Address';
      isValid = false;
    }

    if (isValid) {
      setSuccessMessage('Password Reset Link Send!');
    } else {
      setErrors(error);
    }
  }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-body p-4 rounded w-25 shadow-lg border border-secondary'>
        <h4 className='pb-2'>Reset Password</h4>
        {successMessage && <span id='success' className='success d-flex justify-content-center mt-3'>{successMessage}</span>}
        <form onSubmit={handleResetForm}>
          <input type="text" placeholder='Enter Your Email' className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
          {error.email && <span className='error'>{error.email}</span>}
          <div className='d-grid gap-2 col-6 mx-auto mt-2'>
            <button className='btn btn-outline-success' type='submit'>Reset Password</button>
          </div>
          <div className='d-flex flex-column text-center mt-2'>
            <Link to='/' style={{textDecoration: 'none'}}>Back login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
