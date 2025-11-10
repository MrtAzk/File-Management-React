import React, { useContext, useState } from 'react'

import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { ViewContext } from '../context/ViewContext'

const listView = ({ files, folders }) => {



  const { selectedItems, setSelectedItems, select, deSelect, deSelectAll, itemIsSelected, selectAll } = useContext(ViewContext)

  const handleSelected = (e, item) => {
    const val = e.currentTarget.checked;
    if (val) {
      
      select(item)
    }
    else {
      deSelect(item)
    }

  }

  const bulk = (e) => {
    const val = e.currentTarget.checked;
    if (val) {
      selectAll([...(folders || []), ...(files || [])])
    }
    else {
      deSelectAll()
    }
  }
  return (
    <div className='flex flex-col '>

      <div className='border-b pb-3'>
        <input type="checkbox" onClick={bulk} />
        <span className='flex-1 ' >Name</span>
      </div>

      {folders?.map((f) => {
        return (
          <div key={f.id} className='flex '>
            <input type="checkbox" onChange={(e) => handleSelected(e, f)} checked={itemIsSelected(f)} />
            <FaFolder />
            <span>{f.name}</span>
          </div>)

      })}

      {files?.map((f) => {
        return (
          <div key={f.id} className='flex mt-3 border-b space-x-3'>
            <input type="checkbox" onChange={(e) => handleSelected(e, f)} checked={itemIsSelected(f)} />
            {f?.url ? <img className="w-8 h-8 object-cover rounded-md " src={f.url} alt="" /> : <FaFile />}
            <span>{f.name}</span>
          </div>)

      })}


    </div>
  )
}

export default listView
