import React from 'react'
import { Link } from 'react-router-dom'
import '../Assesst/style/loginform.css'

export default function LoginForm() {
  return (
    <div>
        <div className='login-container'>
            <div className='login-background-box'>
                <div className='link-signup'>
                    <p>Don't have and Account?</p>
                    <button className='sign-up-button-1'>SIGN UP</button>
                </div>
                <div className='login-heading'>
                    <span>Welcome to InteliTrend</span>
                    <p>Log in to your account</p>
                </div>

                <form className='login-form'>
                    <div className='login-item'>
                        <label>Email: </label>
                        <input type='email' placeholder='youremail@gmail.com'></input>
                    </div>
                    <div className='login-item'>
                        <label>Password: </label>
                        <input type='password' placeholder='**************'></input>
                    </div>  
                    <button className='login-button'>LOG IN</button>
                </form> 
               
            </div>
        </div>
    </div>
  )
}
