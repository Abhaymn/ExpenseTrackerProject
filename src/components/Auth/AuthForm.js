import classes from './AuthForm.module.css';
import { useState,useRef } from 'react';
import { Link } from 'react-router-dom';


const AuthForm=()=>{

    const [haveAccount, setHaveAccount] = useState(true);
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const accountHandler = () => {
        setHaveAccount((preState) => {
          return !preState;
        });
      };
    
      let url;
    
      if (haveAccount) {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyD8f02EMJN_lrE8oXOWzbJ-oxh_wcdaYJA ';
      } else {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8f02EMJN_lrE8oXOWzbJ-oxh_wcdaYJA';
      }
    
      const loginFormHandler = async (event) => {
        event.preventDefault();
    
        if (!haveAccount) {
          if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return alert('password and confirm password are not same');
          }
        }
    
        try {
          const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (res.ok) {
            const data = await res.json();
            localStorage.setItem('idToken', JSON.stringify(data));
            setHaveAccount(true);
            // dispatch(loginActions.login(data.email));
          } else {
            const data = await res.json();
            throw data.error;
          }
        } catch (err) {
          alert(err.message);
        }
      };
    return(
        
        <div className={classes.wrapper}>
            <form className={classes.form} onSubmit={loginFormHandler}>
                {haveAccount && (<h4>login</h4>)}
                {!haveAccount && (<h4>sign up</h4>)}
                <input type='email' placeholder='email' ref={emailRef}/>
                <input type='password' placeholder='password' ref={passwordRef}/>
                {!haveAccount && ( <input
                    type='password'
                    placeholder='confirm password'
                    ref={confirmPasswordRef}
                />)}
                <button type='submit'>{haveAccount ? 'Login' : 'Create Account'}</button>
                {haveAccount ? <Link to='/resetpassword'>Forgot Password?</Link> : ''}
            </form>
            <div className={classes.create} onClick={accountHandler}>
        {haveAccount
          ? `Don't have an account? Sign Up`
          : `Have an account? Sign In`}
      </div>
        </div>
    )
}
export default AuthForm;