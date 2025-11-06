import React, { useContext } from 'react'
import Main from '../Layout/Main'
import {  useFolderQuery } from '../queries/useFolderQuery'
import { useParams } from 'react-router-dom'
import TreeMenuItem from '../components/TreeMenuItem'
import { ModalContext } from '../context/ModalContext'
import CreateFolderModal from '../modals/CreateFolderModal'


const FolderView = () => {

    const params = useParams();

    const folder = useFolderQuery(params.id)

    const name = (!params.id ||params.id ==="null") ? "Kök Klasör": folder.findOne.data?.name

    const {appear, disAppear}=useContext(ModalContext)

    const handleCreateModal=()=>{
        appear({
            title:"Yeni Klasör Oluşturma",
            children: (props)=><CreateFolderModal {...props} parentFolderId={params.id}/>
        })
    }


    
    


    return (
        <Main folderName={name} sidebar={<>
            <button onClick={handleCreateModal} className=' bg-amber-50 w-full h-15 cursor-pointer mb-5 mt-5 text-black'>Create Folder</button>

            <TreeMenuItem name={"Kök klasör"} id={"null"} defaultExpanded={true} />

        </>} />
    )

}
export default FolderView
