import React from 'react'
import { GiEyelashes } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import './style.scss'

export default function Login() {
  return (
     <div className='login-box'>
     <form action ="">
     <h2>Login</h2>
     <div className='input-box'>
     <span className='icon'><IoIosMail /></span>
     <input type="email" required>
     <label>Email</label>
     </input>
     </div>
     <div className='input-box'>
     <span className='icon'><GiEyelashes /></span>
     <input type="password " required>
     <label>Password</label>
     </input>
     </div>

     <div className='remember-forgot'>
     <label><input type="checkbox"/>Remember me</label>
     <a href="#">Forgot Password?</a>
     </div>
     <botton type="submit">Login</botton>
     <div className='register-link'>
     <p>Don't have an account?
     <a href="#">Register</a></p>
     </div>
     </form>
   </div>
  )
}
