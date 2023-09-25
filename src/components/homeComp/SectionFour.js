import React from 'react';
import css from './SectionFour.module.css';
import { SiGoogledocs } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const SectionFour = () => {
    return (
        <>
            <div className={css.SectionFour}>
                <div className={css.box}>
                    <article>
                        <span><SiGoogledocs /></span>
                        <strong>DOCS</strong>
                        <p>Reference manuals, articles, and code samples — all the technical documentation you need to use, configure, and run TableDB</p>
                        <Link to={"/reference"} target='_blank' className={css.link}><b>Documentation </b><i><FaLongArrowAltRight /></i></Link>
                    </article>

                    <article>
                        <span><BiCodeAlt /></span>
                        <strong>DEVELOPER CENTER</strong>
                        <p>Reference manuals, articles, and code samples — all the technical documentation you need to use, configure, and run TableDB</p>
                        <div><b>Start Building </b><i><FaLongArrowAltRight /></i></div>

                    </article>
                    <article>
                        <span><FaUsers /></span>
                        <strong>COMMUNITY FORM</strong>
                        <p>Reference manuals, articles, and code samples — all the technical documentation you need to use, configure, and run TableDB</p>
                        <div><b>Join the Community </b><i><FaLongArrowAltRight /></i></div>
                    </article>

                </div>
            </div>
        </>
    )
}

export default SectionFour
