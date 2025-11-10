import React, { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'
import { FaTrash } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useFolderQuery } from '../queries/useFolderQuery';

const ToolBar = () => {

  const { selectedItems} = useContext(ViewContext)

  const params = useParams()
  const query = useFolderQuery(params.id)

  const removeSelected = () => {
    const files = selectedItems.filter(i => Boolean(i.url))
    const folders = selectedItems.filter(i => !Boolean(i.url))
    files.forEach((file) => {
      query.removeFiles.mutateAsync(file.id)
    })
    folders.forEach((folder) => {
      query.removeFolder.mutateAsync(folder.id)
    })
  }

  const isSelected = Boolean(selectedItems.length)
  return (
    <div className='flex items-center h-full p-3'>
      {isSelected && <button onClick={removeSelected} className='bg-white p-3 m-3'><FaTrash /></button>}

    </div>
  )
}

export default ToolBar
