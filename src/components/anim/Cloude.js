import React from 'react'
import css from './Clounde.module.css'

const Cloude = () => {
    return (
        <>
            <div className={`${css.cloud}`}>
                <div className={css.puffs} style={{ color: "#376149" }}></div>
                <div className={css.rain}>
                    <div className={css.drop}></div>
                    <div className={css.drop}></div>
                    <div className={css.drop}></div>
                    <div className={css.drop}></div>
                    <div className={css.drop}></div>
                    <div className={css.drop}></div>
                </div>
            </div>

        </>
    )
}

export default Cloude
