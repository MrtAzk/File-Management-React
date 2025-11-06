import React from 'react'

const Modal = ({ id, title, onClose,  children }) => {
    const Children =children

    return (
        <div className="flex-col bg-amber-500 p-20 rounded-lg w-2xl    " >
            <div id='modal title' className='h-10'>{title}</div>
            <div id='modal-content' className=' flex-1'><Children modalId={id}/></div>
        </div>
    )
}

export default Modal
