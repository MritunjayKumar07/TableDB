import React, { useEffect, useState } from 'react'
import css from './Room.module.css'
import { getTDBdata } from '../../../assert/Api/TableDB001'

export default function Organizations() {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetData()
  }, [])

  const GetData = async () => {
    const res = await getTDBdata(`1mCcZJUIPQ63mEhLKLv-nyKdRBoUYMWbsbsfH5r8-xDY,Organization`);
    setData(res.data);
  }

  // const Organization = (val)=>{
  // console.log(val)
  // return(
  //   <>
  //     <li className={css.li}>{val.KEY}</li>
  //   </>
  // )
  // }

  return (
    <>
      {/* {data.map(Organization)} */}
      {data ? (
        data.map((item, index) => (
          <div key={index}>
            <li className={css.li}>{item.KEY}</li>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}


      {/* <li>
        <details>
          <summary>Org01</summary>
          <div className={css.li}>OrgA</div>
          <div className={css.li}>OrgA</div>
          <div className={css.li}>OrgA</div>
          <div className={css.li}>OrgA</div>
        </details>
      </li>
      <li className={css.li}>org01</li> */}
    </>
  )
}
