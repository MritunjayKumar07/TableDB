import React from 'react'
import css from './SignInSignUp.module.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <>
            <div className={css.Container}>
                <div className={css.Box}>
                    <h2>TableDB SignIn</h2>
                    <input type='text' placeholder='UserName / Email' />
                    <input type='password' placeholder='Password' />
                    <button>Submit</button>
                    <div className={css.other}>
                        <p>Create New Account <Link className={css.Link} to={'/signup'}>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
