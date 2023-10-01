import React from 'react'
import css from './SignInSignUp.module.css'
import { Link } from 'react-router-dom'

export default function UserName() {
    return (
        <>
            <div className={css.Container}>
                <div className={css.Box}>
                    <h2>TableDB UserName </h2>
                    <input type='text' placeholder='Create UserName...' />
                    <input type='password' placeholder='Create Password...' />
                    <input type='text' placeholder='Confirm Password...' />
                    <button>Submit</button>
                    <div className={css.other}>
                        <p>Already have your Account <Link className={css.Link} to={'/signin'}>SignIn</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
