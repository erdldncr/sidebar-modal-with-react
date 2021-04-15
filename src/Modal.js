import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlobal} from './Context'
const Modal = () => {
    const{isModalOpen,setIsModalOpen}=useGlobal()

  return <div className={`modal-overlay ${isModalOpen?'show-modal':''} `}>
    <div className="modal-container">
      <h3>Modal content</h3>
      <button onClick={()=>setIsModalOpen(false)} className="close-modal-btn">
        <FaTimes/>
      </button>
    </div>
  </div>
}

export default Modal
