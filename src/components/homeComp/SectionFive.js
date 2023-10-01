import React, { useEffect, useState } from 'react'
import css from './SectionFive.module.css'
import { FaSearch } from 'react-icons/fa';
import { getTDBdata, getTDBNames } from '../../assert/Api/TableDB001';
import videoSRC from '../../assert/VideoOne.mp4';
import urlImg from '../../assert/Url.png';

export default function SectionFive() {
    const [url, setUrl] = useState("");
    const [jsCode, setJsCode] = useState("");
    const [load, setLoad] = useState(1);

    const handleOutput = async () => {
        setLoad(0);
        const resName = await getTDBNames(`${url}`);
        const res = await getTDBdata(`${url},${resName.data[0]}`);
        const stringData = JSON.stringify(res.data, null, 2)
        if(stringData) setLoad(1);
        const iframe = document.getElementById("output");
        iframe.contentDocument.body.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <style>
            ::-webkit-scrollbar {
                display:none;
            }
        
            body{
                margin:10px;
                color:whitesmoke;
                font-weight: 600;
            }
            </style>
          </head>
          <body>
            <pre id="json">${stringData}</pre>
          </body>
          <script>
            
          </script>
        </html>
        `;
        iframe.contentWindow.eval(jsCode);
    }

    return (
        <>
            <div className={css.SectionFive}>
                <div className={css.inner}>
                    <div className={css.left}>
                        <div>
                            <span className='span'>TEST YOUR DATA !</span>
                            <p className='head'>Convert your<strong className='strong'> GOOGLE DATA</strong>.</p>
                            <p className='para'>Test applications on the Basis of your google drive for developer platform.
                                Edge user stories and insights from AI-powered event driven apps.
                            </p>
                            <div className={css.searchBox}>
                                <input type='text' placeholder='Enter Your Google Sheet URL...' onChange={(e) => setUrl(e.target.value.split("/")[5])} />
                                <FaSearch id={css.searchInput} />
                            </div>
                            <div className='buttunSec'>
                                <button className='button' onClick={handleOutput}>RUN ⮕ </button>
                                {load?"":"Dont share this url. Loading your Data..."}
                            </div>
                        </div>
                    </div>
                    <div className={css.right}>
                        <head>
                            <div className={css.dot}></div>
                            <div className={css.dot}></div>
                            <div className={css.dot}></div>
                        </head>
                        {url ? <iframe id='output'></iframe> : <><img src={urlImg} /><video autoPlay loop muted playsInline><source src={videoSRC}></source></video></>}
                    </div>
                </div>
            </div>
        </>
    )
}

//rfc