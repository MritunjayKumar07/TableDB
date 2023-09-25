import React, { useEffect, useState } from 'react'
import css from './SectionFive.module.css';

const SectionFive = () => {
    const [htmlCode, setHtmlCode] = useState("");
    const [cssCode, setCssCode] = useState("");
    const [jsCode, setJsCode] = useState("");

    const handleOutput = () => {
        const iframe = document.getElementById("output");
        iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
        iframe.contentWindow.eval(jsCode);
    }

    return (
        <>
            <section className={css.SectionFive}>
                <div className={css.playground}>
                    <div className={css.left}>
                        <label>HTML</label>
                        <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>
                        <label>CSS</label>
                        <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>
                        <label>JavaScript</label>
                        <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>
                    </div>
                    <div className={css.right}>
                        <button onClick={handleOutput}>Run</button>
                        <iframe id='output'></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionFive
