import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobal} from'./Context'
const Home = () => {
const{setIsModalOpen,setIsSideBarOpen}=useGlobal()
  return <main>
    <button onClick={()=>setIsSideBarOpen(true)} className="sidebar-toggle">
      <FaBars/>
    </button>
    <button onClick={()=>setIsModalOpen(true)} className="btn">Show modal</button>
  </main>
}

export default Home
