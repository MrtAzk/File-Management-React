import React, { useCallback, useContext, useState } from 'react'
import useBoolean from '../hooks/useBoolean'
import { FaChevronRight } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import TreeMenu from './TreeMenu';
import { useNavigate, useParams } from 'react-router-dom';
import { ViewContext } from '../context/ViewContext';

const TreeMenuItem = ({ name, id, parentId,defaultExpanded }) => {
  const isOpen = useBoolean(defaultExpanded ||false);

  const navigete=useNavigate()

  const params=useParams()

  const {deSelectAll } = useContext(ViewContext)


  const handClick=useCallback(()=>{
    navigete("/folder/"+id)
    deSelectAll()
  },[])

  const isCurrent=params.id===id
  const Icon=isCurrent? FaFolderOpen :FaFolder
  const fontWeight=isCurrent ? "font-bold" :""

  return (
    <>

      {!isOpen.value && (

        <div className={`flex items-center p-1 cursor-pointer text-sm font-small text-black ${fontWeight}`}  onClick={handClick}>
          <button className='bg-none mr-2' onClick={isOpen.setTrue}><FaChevronRight  className='mr-2 cursor-pointer'/></button>
          <Icon className='mr-2 cursor-pointer' />

          {name}

        </div>
      )}

      {!!isOpen.value && (
        <>
          <div className={`flex items-center p-1 cursor-pointer text-sm font-medium text-black ${fontWeight}`}  onClick={handClick}>
            <button className='bg-none mr-2' onClick={isOpen.setFalse}><FaChevronDown className='mr-2 cursor-pointer' /></button>
            <Icon className='mr-2 cursor-pointer' />

            {name}
          </div>


          <div className='ml-5 mt-1 mb-2' >
            <TreeMenu parentId={id} />
          </div>

        </>
      )}

    </>





  )

}

export default TreeMenuItem
