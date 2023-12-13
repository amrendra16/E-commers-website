import React from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address' />
        <input type="pasword" placeholder='Enter your Password' />
      </div>
      <button>Continue</button>
      <p className="loginsingup-login">Already have an acount ? <span>Login</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, i agree to the terms of use & privacy policy</p>
        <p></p>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup
