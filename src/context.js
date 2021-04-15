import React, { useState, useContext, createContext } from 'react'

import { FaShower } from 'react-icons/fa'

const AppContext=React.createContext()

const AppProvider=({children})=>{
    const[isSideBarOpen,setIsSideBarOpen]=useState(false)
    const[isModalOpen,setIsModalOpen]=useState(false)
    
    return <AppContext.Provider value={{isModalOpen,isSideBarOpen,setIsModalOpen,setIsSideBarOpen}} >
        {children}
    </AppContext.Provider>
}

export const useGlobal=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}