import { useState } from "react";
import { createContext } from "react";

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {



    const [selectedItems, setSelectedItems] = useState([])
    const [prevEye, setPrevEye] = useState(undefined)
    const [listType, setListType] = useState("list")

    const toogleType = () => {
        setListType(prev => {
            return prev === "list" ? "grid" : "list"
        })

    }
const select = (item) => {
  console.log("Select çağrıldı:", item.name);
  setSelectedItems((prev) => {
    console.log("Önceki selectedItems:", prev.map(i => i.name));
    if (prev.find((i) => i.id === item.id)) return prev;
    const yeni = [...prev, item];
    console.log("Yeni selectedItems:", yeni.map(i => i.name));
    return yeni;
  });
};


const deSelect = (item) => {
  console.log("deSelect çağrıldı:", item.name);
  setSelectedItems((prev) => {
    const yeni = prev.filter(i => i.id !== item.id);
    console.log("Yeni selectedItems:", yeni.map(i => i.name));
    return yeni;
  });
};

    const deSelectAll = () => {
        setSelectedItems([])
    }
    const itemIsSelected = (item) => {
        return selectedItems.some((i) => i.id === item.id)
    }

    const selectAll = (items) => {
        setSelectedItems(items)
    }


    const contextValue = {
        selectedItems, setSelectedItems, select, deSelect, deSelectAll, itemIsSelected, selectAll, prevEye, setPrevEye, toogleType, listType

    }

    return (<ViewContext.Provider value={contextValue}>
        {children}
    </ViewContext.Provider>)
}