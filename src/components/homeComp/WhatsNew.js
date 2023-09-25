import React from 'react'
import css from './SectionTHree.module.css'
import { BiBold } from 'react-icons/bi'
import {FaLongArrowAltRight} from 'react-icons/fa'

const WhatsNew = () => {
    return (
        <>
            <ul>
                <li>BLog</li>
                <li>Announcements</li>
            </ul>
            <div className={css.mainContent}>
                <div className={css.cards_wrapper}>
                    <div className={css.card}>
                        <span><BiBold /></span>
                        <strong>FREE Table Database API 😀</strong>
                        <p>Welcome to the Table Database API! This API allows you to interact with a simple table-based database hosted on Google Sheetstable-based database hosted on Google Sheets.</p>
                        <a href='https://realisticcode.blogspot.com/2023/08/promocrux.html' target='_blank'>Start Building <FaLongArrowAltRight/></a>
                    </div>
                    <div className={css.card}>
                        <span><BiBold /></span>
                        <strong>FREE Table Database API 😀</strong>
                        <p>Welcome to the Table Database API! This API allows you to interact with a simple table-based database hosted on Google Sheetstable-based database hosted on Google Sheets.</p>
                        <a href='https://realisticcode.blogspot.com/2023/08/promocrux.html' target='_blank'>Start Building <FaLongArrowAltRight/></a>
                    </div>
                    <div className={css.card}>
                        <span><BiBold /></span>
                        <strong>FREE Table Database API 😀</strong>
                        <p>Welcome to the Table Database API! This API allows you to interact with a simple table-based database hosted on Google Sheetstable-based database hosted on Google Sheets.</p>
                        <a href='https://realisticcode.blogspot.com/2023/08/promocrux.html' target='_blank'>Start Building <FaLongArrowAltRight/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatsNew
