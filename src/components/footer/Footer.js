import React from 'react';
import css from './Footer.module.css';
import Logo from "../../assert/dog.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail, BiSolidUser, BiSolidLocationPlus } from "react-icons/bi";

const Footer = () => {
    return (
        <div class={css.footer}>
            <div className={css.heading}>
                <h2><img src={Logo} alt='' />TableDB<sup>™</sup></h2>
            </div>
            <div className={css.content}>
                <div className={css.details}>
                    <h4 className={css.address}>Contact Us</h4>
                    <p>
                        {/* <BiSolidLocationPlus /> */}
                        Create applications on the Basics of your <br />google drive for developer platform.
                    </p>
                    <p><BsFillTelephoneFill /> <a href="#"> +919-835-678-727</a></p>
                    <p><BiLogoGmail /> <a href="#"> TableDataBase@gmail.com</a></p>
                </div>
                <div className={css.social}>
                    <h4>Account</h4>
                    <p>
                        {/* <BiSolidLocationPlus /> */}
                        <a href="#">Sign in</a></p>
                    {/* <p><a href="#">Twitter</a></p>
                    <p><a href="#">Github</a></p>
                    <p><a href="#">Facebook</a></p>
                    <p><a href="#">Instagram</a></p> */}
                </div>
                <div className={css.links}>
                    <h4>Company</h4>
                    <p><BiSolidUser /><a href="#">About us</a></p>
                    {/* <p><a href="#">About</a></p>
                    <p><a href="#">Blogs</a></p>
                    <p><a href="#">Contact</a></p> */}
                </div>
                <div className={css.services}>
                    <h4>Resources</h4>
                    <p><AiFillLinkedin />Safety Privacy & Terms</p>
                    {/* <p><BsFillTelephoneFill/>Web development</p>
                    <p><BsFillTelephoneFill/>DevOps</p>
                    <p><BsFillTelephoneFill/>Web designing</p> */}
                </div>
            </div>
            <hr />
            <footer>
                © 2022 TableDataBase.
            </footer>
        </div>
    )
}

export default Footer