import React, { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'


const PreviewImg = () => {

  const viewContext = useContext(ViewContext)
  
  if (viewContext.prevEye || viewContext.selectedItems.length === 1 && viewContext.selectedItems[0].url) {
    //resim göstecek burası
    const item = viewContext.prevEye || viewContext.selectedItems[0]
    return <div className=''>
      {viewContext.prevEye && < button onClick={()=> viewContext.setPrevEye(undefined)}>X</button>}
      <img src={item.url}  />
    </div>



  } else if (viewContext.selectedItems.length > 0) {
    //seçilenler gözükecek
    return <div>{viewContext.selectedItems.map(item => { return <p key={item.id} >{item.name}</p> })}</div>


  } else {
    null
  }
  return (
    <div>

    </div>
  )
}

export default PreviewImg
