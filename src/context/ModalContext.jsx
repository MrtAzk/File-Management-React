import { createContext, useCallback, useRef, useState } from "react";
import { v4 } from "uuid";
import Modal from "./Modal";

export const ModalContext = createContext()


export const ModalProvider = ({ children }) => {

    const [modals, setModals] = useState([]);

    const backref =useRef(null)

    const appear = (modal) => {
        const id = v4()
        setModals([...modals, { ...modal, id }])
    }


    const disAppear = (modalId) => {
        setModals(modals.filter(m => m.id !== modalId))
    }

    const handleBackDropClick=useCallback((e)=>{
        if(e.target !==backref.current) return ;
        setModals((prev)=>{
            const newModals=[...prev]
            newModals.pop()
            return newModals
        })

    },[])

    const contextValue = {
        appear, disAppear
    }

    


    return (<ModalContext.Provider value={contextValue}>
        {children}
        {modals.length >0 && (
            <div ref={backref} id="modal" className=" flex items-center justify-center bg-black/25 fixed top-0  w-full h-screen " onClick={handleBackDropClick}>
                {modals.map((modal) => { return <Modal key={modal.id} id={modal.id} title={modal.title}  children={modal.children} onClose={()=>disAppear(modal.id)} /> })}
            </div>)}

    </ModalContext.Provider>)
}