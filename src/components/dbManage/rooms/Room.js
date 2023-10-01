import React, { useState } from 'react'
import css from './Room.module.css'
import Navebar_web004 from '../../navebar/Navebar_web004'
import { BsFillCloudArrowUpFill, BsFillGrid1X2Fill, BsX } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import logo from '../../../assert/dog.png'
import Organizations from './Organizations'

export default function Room() {
  const [org, setOrg] = useState(1);
  const [sideBar, setSideBar] = useState(1);
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const [newRoom, setNewRoom] = useState();
  const [reloadOrganizations, setReloadOrganizations] = useState(false);
  const [room, setAddRoom] = useState(1);
  const [popup, setPopup] = useState(1);

  const AddSingleData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_DB_ORG_ADD_SINGLE_LINE_DATA},${name + "_ORG"},${name},${url}`);
      const data = await response.json();
      setReloadOrganizations(true);
      setOrg(!org)
      return data;
    }
    catch (error) {
      console.error('Error fetching data:', error);
      return { error: 'An error occurred while fetching data.' };
    }
  }

  const CreateNewRoom = async () => {
    console.log(newRoom)
  }

  return (
    <>
      <section id={css.Room}>
        <div className={css.head}>
          <Navebar_web004 />
        </div>
        {popup ? <div className={css.body}>
          {sideBar ?
            <div id={css.RoomSideMenu}>
              <>
                <div className={css.menu}><BsFillCloudArrowUpFill /><h3>Organizations</h3></div>
                <hr />
                <ul>
                  <div className={css.inline}>
                    <Organizations key={reloadOrganizations} />
                    <button onClick={() => setOrg(!org)} className={css.button2}>Add Organizations</button>
                  </div>
                </ul>
                <img className={css.img} src={logo} />
              </>
            </div>
            : ""
          }
          <div id={css.RoomPage}>
            {org ? <>
              <div className={css.RoomPageTop}>
                <div className={css.left}>
                  <h1>TableDB ROOMS </h1>
                </div>
                <div className={css.buttons}>
                  <button className={css.svg} onClick={() => setSideBar(!sideBar)}><BsFillGrid1X2Fill style={{ cursor: "pointer" }} /></button>
                  <button className={css.button} onClick={() => setAddRoom(!room)}>Create New Room</button>
                </div>
              </div>
              <div className={css.Data}>
                <div className={css.tabData}>
                  {room ? <table id={css.customers} >
                    <tr>
                      <th>Rooms</th>
                      <th>Type</th>
                      <th>Roles</th>
                      <th>Actions</th>
                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                      <td><AiFillSetting onClick={() => setPopup(!popup)} /></td>
                    </tr>
                  </table> :
                    <>
                      <div className={css.AddOrg}>
                        <h1>Add New Room </h1>
                        <div className={css.box}>
                          <input onChange={(e) => setNewRoom(e.target.value)} type='text' placeholder='Eeter Name...' />
                          <button onClick={CreateNewRoom}>Submit</button>
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            </>
              : <>
                <div className={css.AddOrg}>
                  <h1>Add New Organizations </h1>
                  <div className={css.box}>
                    <input onChange={(e) => setUrl(e.target.value.split("/")[5])} type='text' placeholder='Eeter your google sheet url...' />
                    <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Eeter your Organizations name...' />
                    <button onClick={AddSingleData}>Submit</button>
                  </div>
                </div>
              </>}
          </div>
        </div> :
          <div className={css.popup}>
            <div className={css.popupInner}>
              <BsX onClick={() => setPopup(!popup)} />
              <button>Remve your room</button>
              <button>Shut Down your room</button>
            </div>
          </div>}

      </section>
    </>
  )
}
