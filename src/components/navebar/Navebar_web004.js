import React, { useState } from 'react';
import css from './Navebar_web004.module.css';
import { BsGithub } from 'react-icons/bs';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { AiFillHome, AiTwotoneLock } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { BiSolidHelpCircle, BiMenu } from 'react-icons/bi';
import { FaHandPointRight } from 'react-icons/fa';
import Logo from "../../assert/dog.png"
import { Link } from 'react-router-dom';

const Navebar_web004 = () => {
  const [menu, setMenu] = useState()

  return (
    <>
      <div id={css.mainHead}>
        <div id={css.Heading}>
          <a href='#'><button>blog</button> See what’s new with TableDB 1.0. Learn more <FaHandPointRight /></a>
        </div>
        <header>
          <div className={css.brand}>
            <Link to={"/home"} ><img src={Logo} alt='LOGO' /></Link>
            <h3>TableDB </h3>
          </div>
          <BiMenu id={css.menuIcon} onClick={() => setMenu(!menu)} />
          <div className={menu ? `${css.navbarAction} ${css.navbar}` : `${css.navbar}`}>
            <div className={css.searchBox}>
              <input type='text' placeholder='Search her...' />
              <FaSearch id={css.searchInput} />
            </div>
            <ul>
              <Link to={'/home'}>
                <li>
                  <AiFillHome />
                  <a href='#' id={css.headIcon}>Home</a>
                </li>
              </Link>
              <Link to={'/'}>
                <li>
                  <MdAccountCircle />
                  <a href='#' id={css.headIcon}>Profile</a>
                </li>
              </Link>
              <Link to={'/'}>
                <li>
                  <BiSolidHelpCircle />
                  <a href='#' id={css.headIcon}>Help</a>
                </li>
              </Link>
              <Link to={'/'}>
                <li>
                  <AiTwotoneLock />
                  <a href='#' id={css.headIcon}>Account</a>
                </li>
              </Link>
              <Link to={'/'}>
                <li>
                  <FaSignOutAlt />
                  <a href='#' id={css.headIcon}>SignOut</a>
                </li>
              </Link>
            </ul>
          </div>
        </header>
      </div>

    </>
  )
}

export default Navebar_web004;
