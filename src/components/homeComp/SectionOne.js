import React from 'react'
import css from './SectionOne.module.css';
import Logo from '../../assert/dog.png';
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const SectionOne = () => {
    return (
        <>
            <section className={css.section}>
                <div className={css.Home}>
                    <div className={css.ContentSide}>
                        <div>
                            <span className='span'>Hi There!</span>
                            <p className='head'>Convert your<strong className='strong'> GOOGLE DRIVE</strong> into your <strong>DATABASE</strong>.</p>
                            <p className='para'>Create applications on the Basics of your google drive for developer platform.
                                Edge user stories and insights from AI-powered event driven apps.
                            </p>
                            <div className='buttunSec'>
                                <Link to={'/room'} className='button'><BsFillCloudUploadFill /> Start free</Link>
                                <Link to={'/reference'} target='_blank' className='button'>Learn more ⮕ </Link>
                            </div>
                        </div>
                    </div>
                    <div className={css.ImageSide}>
                        <img src={Logo} alt='a green dog with big eyes sitting down, a character portrait by Matt Bors, reddit contest winner, lyco art, concept art, flat shading, creative commons attribution' />
                        <br /><p>Do you know me</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionOne
