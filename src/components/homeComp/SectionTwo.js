import React from 'react';
import css from './SectionTwo.module.css';
import { SiFsecure } from 'react-icons/si'

const SectionTwo = () => {
  return (
    <>
      <section className={css.SectionTwo}>
        <h2></h2>
        <div className={css.Left}>
          <div className={css.stat}>
            <a><div className={css.status}><span>28k+</span><p>Customers ⮕</p></div></a>
            <a><div className={css.status}><span>1.5k+</span><p>Developers join ⮕</p></div></a>
            <a><div className={css.status}><span>55k+</span><p>Total use ⮕</p></div></a>
          </div>
          <SiFsecure />
        </div>
        <div className={css.Right}>
          <div className={css.innerRight}>
            <h2>Secure your Database</h2>
            <p>A secure database requires strong authentication, encryption, regular updates, audits, and access control. Backup strategies, vulnerability checks and data masking are critical to protecting sensitive data and maintaining data integrity.</p>
            <button>Know 👉</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionTwo
