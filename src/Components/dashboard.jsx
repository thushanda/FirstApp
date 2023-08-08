import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/dashboard.css'

export default function Dashboard() {
  return (
    
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-5 rounded-3' id='bg'>
        <Link to="/" className='btn btn-success'>Logout</Link>
      </div>
    </div>
    
  );
};
