import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import classes from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const email = useRef();
  const navigate = useNavigate();

  const resetPasswordHandler = async (event) => {

    event.preventDefault();

    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD8f02EMJN_lrE8oXOWzbJ-oxh_wcdaYJA',
        {
          method: 'POST',
          body: JSON.stringify({
            requestType: 'PASSWORD_RESET',
            email: email.current.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const data = await res.json();
      if (res.ok) {
        navigate('/login');
      } else {
        throw data.error;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={resetPasswordHandler}>
      <label>Enter the registered email</label>
      <input type='email' placeholder='email' ref={email} />
      <Button type='submit'>Send Link</Button>
    </form>
  );
};

export default ForgotPassword;