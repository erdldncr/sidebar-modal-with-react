import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {useGlobal} from './Context'
const Sidebar = () => {
  const {isSideBarOpen,setIsSideBarOpen}=useGlobal()

  return <aside className={`sidebar ${isSideBarOpen&&'show-sidebar'} `}>
    <div className="sidebar-header">
      <img src={logo} className='logo' alt='coding addict'/>
      <button  onClick={()=>setIsSideBarOpen(false)} className="close-btn">
        <FaTimes/>
      </button>
    </div>
    <ul className="links">
      {links.map(link=>{
        const{id,url,text,icon}=link
        return <li key={id} >
            <a href={url}> {icon}{text} </a>
        </li>
      })}
    </ul>
    <ul className="social-icons">
      {social.map(link=>{
        const{id,url,icon}=link
        return <li key={id} >
          <a href={url}>
            {icon}
          </a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar
