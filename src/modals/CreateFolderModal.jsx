import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import * as yup from "yup"
import { useParams } from 'react-router-dom'
import { useFolderQuery } from '../queries/useFolderQuery'

const validationSchema = yup.object({
    name: yup.string().required("İsim Zorunludur")
})

const CreateFolderModal = ({ modalId,parentFolderId  }) => {

    const { appear, disAppear } = useContext(ModalContext)
    const param=useParams();

    const folder=useFolderQuery(param.id)

    const form = useFormik(
        {
            initialValues: { name: "" },
            validationSchema,
            onSubmit: (values) => console.log(values)
        }
    )
    const handleOk = () => {
        form.validateForm().then((res) => {
            if (Object.keys(res).length) return;
            const submittedParentId = (parentFolderId === "null" || !parentFolderId) 
                ? null // Backend'in beklediği gerçek 'null' objesini gönderin
                : parentFolderId;
            folder.addFolder.mutateAsync({...form.values,parentId:submittedParentId||null}).then(()=>{
                disAppear(modalId)
            })
           
        })


    }
    return (
        <div>
            <form onSubmit={form.handleSubmit}>
                <label htmlFor="name">FolderName</label>
                <div className='flex flex-col'>
                    <input id='name' name='name' onChange={form.handleChange} value={form.values.name} className='bg-white' placeholder='Klasör Adı' />
                    <span id='input-error'>{form.errors.name}</span>
                </div>

            </form>
            <div id='footer'><button onClick={handleOk}>Ok</button></div>
        </div>
    )
}

export default CreateFolderModal
