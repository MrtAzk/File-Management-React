import React, { useCallback, useContext, useState } from 'react'

import { FaFolder } from "react-icons/fa";
import { ViewContext } from '../context/ViewContext'
import { useNavigate, useParams } from 'react-router-dom';
import { useFolderQuery } from '../queries/useFolderQuery';
import GridViewİtem from './GridViewItem';

const GridView = ({ files, folders }) => {



  const { selectedItems, setSelectedItems, select, deSelect, deSelectAll, itemIsSelected, selectAll } = useContext(ViewContext)
  const params=useParams()
  const folder =useFolderQuery(params.id)



  const bulk = (e) => {
    const val = e.currentTarget.checked;
    if (val) {
      selectAll([...(folders || []), ...(files || [])])
    }
    else {
      deSelectAll()
    }
  }

  const navigate = useNavigate()


  return (
    <div className='flex flex-row '>

      <div className='border-b pb-3'>
        <input type="checkbox" onClick={bulk} />
        <span className='flex-1 ' >Name</span>
      </div>
      <div key={"Parent Folder"} className='flex ml-4 ' onDoubleClick={() => { deSelectAll(); navigate("/folder/" + folder.findOne.data.parentId) }}>

        <FaFolder />
        <span>..</span>
      </div>
      {folders?.map((f) => {
        return (
          <GridViewİtem key={f.id} item={f}/> )

      })}

      {files?.map((f) => {
        return (
          <GridViewİtem key={f.id} item={f}/>
          )

      })}


    </div>
  )
}

export default GridView
