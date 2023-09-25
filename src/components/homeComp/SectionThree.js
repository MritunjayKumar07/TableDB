import React, { useState } from 'react'
import css from './SectionTHree.module.css'
import { BiBold } from 'react-icons/bi'
import { FaLongArrowAltRight } from 'react-icons/fa'
import WhatsNew from './WhatsNew'


const SectionThree = () => {
    const [active, setActive] = useState("What's New");
    return (
        <>
            <section className={css.Section}>
                <h1>It was built for <strong>developers</strong></h1>
                <span>The document data model matches your thought process and coding approach.</span>
                <div className={css.SectionThree}>
                    <div className={css.Dropdown}>
                        <details className={css.details} onClick={() => setActive("What's New")}>
                            <summary className={active === "What's New" ? `${css.active}` : ""}>What's New</summary>
                            {active === "What's New" ? <div className={css.Versions}>
                                <p>Explore our advanced database platform for a seamless data experience. Stay ahead of the latest trends in data management.</p>
                            </div> : ""}
                        </details>
                        <details className={css.details} onClick={() => setActive("Get Start")}>
                            <summary className={active === "Get Start" ? `${css.active}` : ""}>Get Start</summary>
                            {active === "Get Start" ? <div className={css.Versions}>
                                Convert your GOOGLE DRIVE into your DATABASE.
                            </div> : ""}
                        </details>
                        <details className={css.details} onClick={() => setActive("Versions")}>
                            <summary className={active === "Versions" ? `${css.active}` : ""}>Versions</summary>
                            {active === "Versions" ? <div className={css.Versions}>
                                001
                            </div> : ""}
                        </details>
                        <details className={css.details} onClick={() => setActive("Teach Tips")}>
                            <summary className={active === "Teach Tips" ? `${css.active}` : ""}>Teach Tips</summary>
                            {active === "Teach Tips" ? <div className={css.Versions}>
                                Hello
                            </div> : ""}
                        </details>
                    </div>
                    <div className={css.content}>
                        <strong>{active}</strong><hr />
                        <div className={css.Versions_con}>
                            {active === "What's New" ?
                                <WhatsNew />
                                : active === "Get Start" ?
                                    <>
                                        Get Start
                                    </> : active === "Versions" ?
                                        <>
                                            <div className={css.mainContent}>
                                                <div className={css.cards_wrapper}>
                                                    <div className={css.card}>
                                                        <span><BiBold /></span>
                                                        <strong>FREE Table Database API 😀</strong>
                                                        <p>Welcome to the Table Database API! This API allows you to interact with a simple table-based database hosted on Google Sheetstable-based database hosted on Google Sheets.</p>
                                                        <a href='https://realisticcode.blogspot.com/2023/08/promocrux.html' target='_blank'>Start Building <FaLongArrowAltRight /></a>
                                                    </div>
                                                    <div className={css.card}>
                                                        <span><BiBold /></span>
                                                        <strong>FREE Table Database API 😀</strong>
                                                        <p>Welcome to the Table Database API! This API allows you to interact with a simple table-based database hosted on Google Sheetstable-based database hosted on Google Sheets.</p>
                                                        <a href='https://realisticcode.blogspot.com/2023/08/promocrux.html' target='_blank'>Start Building <FaLongArrowAltRight /></a>
                                                    </div>
                                                    <div className={css.card}>
                                                        <span><BiBold /></span>
                                                        <strong>FREE Table Database API 😀</strong>
                                                        <p>Welcome to the Table Database API! This API allows you to interact with a simple table-based database hosted on Google Sheetstable-based database hosted on Google Sheets.</p>
                                                        <a href='https://realisticcode.blogspot.com/2023/08/promocrux.html' target='_blank'>Start Building <FaLongArrowAltRight /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : active === "Teach Tips" ?
                                            <>
                                                Teach Tips
                                            </> : ""}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionThree
