import React from 'react'
import TreeMenuItem from './TreeMenuItem'
import {useFolderQuery} from '../queries/useFolderQuery';


const TreeMenu = ({parentId}) => {
  const folder =useFolderQuery(parentId);
  
      

    const items =folder.findAll.data ;

  return (
    <div>
      {items?.map(item =>(
        <TreeMenuItem
        key={item.id}
        name={item.name} id={item.id} parentId={item.parentId}
        />
      ))}
    </div>
  )
}

export default TreeMenu
