import React from 'react'
import { signInWithRedirect } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Login({ setIsLogin }) {
  const navigate = useNavigate();

  const loginInGoogle = () => {
    signInWithRedirect(auth, provider).then((result) => {
      localStorage.setItem('isLogin', false);
      setIsLogin(true);
      navigate('/');
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginInGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login;
