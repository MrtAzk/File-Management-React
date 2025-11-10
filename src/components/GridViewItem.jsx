import React, { useContext } from 'react'
import { ViewContext } from '../context/ViewContext';
import { FaFolder } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";


const GridViewİtem = ({item}) => {
  const f =item
  const navigate=useNavigate()

  const { selectedItems, setSelectedItems, select, deSelect, deSelectAll, itemIsSelected, selectAll,setPrevEye } = useContext(ViewContext)

    const handleSelected = (e, item) => {
    const val = e.currentTarget.checked;
    if (val) {

      select(item)
    }
    else {
      deSelect(item)
    }

  }
  return (
    <div key={f.id} className='flex flex-col items-center justify-center border border-gray-200 rounded-2xl  p-4 m-2 w-36 h-36  cursor-pointer ' onDoubleClick={!f.url ?() => { deSelectAll(); navigate("/folder/" + f.id) }:undefined}>
      <input type="checkbox" onChange={(e) => handleSelected(e, f)} checked={itemIsSelected(f)} />
      {f?.url ? <img className="w-8 h-8 object-cover rounded-md " src={f.url} alt="" /> : <FaFolder />}
      <span className='flex-1'>{f.name}</span>
      <div className='m-auto'>{Boolean(f?.url) &&<FaEye onClick={()=>{setPrevEye(f)}}/>}</div>
    </div>
  )
}

export default GridViewİtem
