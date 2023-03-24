import React from 'react'
import '../Assesst/style/signup.css'
import Image1 from '../Assesst/img/sign-up-form-image.jpg'

export default function SignupForm() {
  return (
    <div>
        <div className='signup-container'>
 
                <img className='signup-container-image' src={Image1}></img>
  

            <div className='form-container'>
                <div className='login-link'>
                    <p>Already have an account?</p>
                    <button className='login-button-2'>SIGN UP</button>
                </div>
                <div>
                    <span>Sign Up to InteliTrend</span>
                    <p>Register your account</p>
                </div>

                <div className='sign-up-form'>
                    <form>
                        <div className='signpu-item'>
                            <label> First Name</label>
                            <input type='text' placeholder='Enter your first Name' id='firstName' name='firstName'></input>
                        </div>

                        <div className='signpu-item'>
                            <label>Last Name</label>
                            <input type='text' placeholder='Enter your last Name' id='firstName' name='firstName'></input>
                        </div>

                        <div className='signpu-item'>
                            <label>Date of Birth</label>
                            <input type='date' placeholder='Enter your birthday' id='birthday' name='birthday'></input>
                        </div>

                        <div className='signpu-item'>
                            <label>NIC</label>
                            <input type='text' placeholder='Enter your NIC number' id='NIC' name='NIC'></input>
                        </div>

                        <div className='signpu-item'>
                            <label>Email</label>
                            <input type='email' placeholder='Enter your email address' id='email' name='email'></input>
                        </div>

                        <div className='signpu-item'>
                            <label>Mobile Number</label>
                            <input type='mobile' placeholder='Enter your mobile number' id='mobile' name='mobile'></input>
                        </div>

                        <div className='signpu-item'>
                            <label>Password</label>
                            <input type='password' placeholder='**************' id='password' name='password'></input>
                        </div>

                        <div className='signpu-item'>
                            <label>Confirm Password</label>
                            <input type='confirm-password' placeholder='**************' id='confirm-password' name='confirm-password'></input>
                        </div>
                    </form>

                    <button type='submit' className='sign-up-button'>SUBMIT</button>
                </div>
                

            </div>
        </div>
    </div>
  )
}
