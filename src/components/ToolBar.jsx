import React, { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'
import { FaTrash } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useFolderQuery } from '../queries/useFolderQuery';
import { ModalContext } from '../context/ModalContext';
import CreateFolderModal from '../modals/CreateFolderModal';
import CreateFileModal from '../modals/CreateFileModal';

const ToolBar = () => {

  const { selectedItems,toogleType } = useContext(ViewContext)

  const params = useParams()
  const query = useFolderQuery(params.id)
  const { appear, disAppear } = useContext(ModalContext)



  const handleCreateModal = () => {
    appear({
      title: "Yeni Klasör Oluşturma",
      children: (props) => <CreateFolderModal {...props} parentFolderId={params.id} />
    })
  }

    const handleCreateModalFile = () => {
    appear({
      title: "Yeni Klasör Oluşturma",
      children: (props) => <CreateFileModal {...props} parentFolderId={params.id} />
    })
  }


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
      {<button onClick={handleCreateModal} className='bg-white p-3 m-3'>Create Folder</button>}
      {<button onClick={handleCreateModalFile} className='bg-white p-3 m-3'>Create File</button>}
      <button  onClick={toogleType} className='bg-white p-3 m-3'>Toogle List Type</button>
      {isSelected && <button onClick={removeSelected} className='bg-white p-3 m-3'><FaTrash /></button>}

    </div>
  )
}

export default ToolBar
