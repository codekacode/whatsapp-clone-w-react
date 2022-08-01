import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css"

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message))
  };
  return (
    <div className="login">
      <div className="login__container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png"
          alt="Whatsapp logo"
        />
        <div className="login__text">
          <h1>Sign In to Whatsapp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  )
}

export default Login