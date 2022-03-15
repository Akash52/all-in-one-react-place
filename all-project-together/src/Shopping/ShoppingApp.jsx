import React from 'react';
import './Shopping.css';

const ShoppingApp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className='form'>
      <p>Please Login</p>
      <input className='form-input' type='text' placeholder='Username' />
      <input
        className='form-input '
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
      />
      <button className='form-btn'>Login</button>
      <p onClick={toggleShowPassword}>Show Password 😁</p>
    </form>
  );
};

export default ShoppingApp;
