import React from 'react'
import css from './SignInSignUp.module.css'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <>
            <div className={css.Container}>
                <div className={css.Box}>
                    <h2>TableDB SignUp</h2>
                    <input type='text' placeholder='Full Name...' />
                    <input type='email' placeholder='Email...' />
                    <input type='number' placeholder='Mobile Number...' />
                    <input type='text' placeholder='Country...' />
                    <input type='text' placeholder='State...' />
                    <input type='number' placeholder='Pincode...' />
                    <button>Submit</button>
                    <div className={css.other}>
                        <p>Already have your Account <Link className={css.Link} to={'/signin'}>SignIn</Link></p>
                    </div>
                </div>
            </div>
        </>
    ) 
}
