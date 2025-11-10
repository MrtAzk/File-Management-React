import React, { useContext } from 'react'
import { ViewContext } from '../context/ViewContext';
import { FaFolder } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";


const ListViewİtem = ({ item }) => {
  const navigate = useNavigate()

  const { select, deSelect, deSelectAll, itemIsSelected, setPrevEye,  } = useContext(ViewContext)

  const handleSelected = (e, _item) => {
    e.stopPropagation();
    const val = e.currentTarget.checked;

 

    if (val) {

      select(_item)
    }
    else {
      deSelect(_item)
    }

  }
  return (
    <div key={item.id} className='flex border-b ' onDoubleClick={!item.url ? () => { deSelectAll(); navigate("/folder/" + item.id) } : undefined}>
      <input type="checkbox" onClick={(e)=>{e.stopPropagation();}} onChange={(e) =>{ handleSelected(e, item)}} checked={itemIsSelected(item)} />
      {item?.url ? <img className="w-8 h-8 object-cover rounded-md " src={item.url} alt="" /> : <FaFolder />}
      <span className='flex-1'>{item.name}</span>
      <div className='m-auto'>{Boolean(item?.url) && <FaEye onClick={() => { setPrevEye(item) }} />}</div>
    </div>
  )
}

export default ListViewİtem
