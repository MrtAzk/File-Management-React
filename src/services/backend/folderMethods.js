import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:9090"
})

export const list = async (query) => {

    try {
        const res = await instance.get("/folder", { params: query });
        return res.data;
    } catch (error) {
        console.log("Dosyalar getirilirken hata oluştu ");
        throw error;
    }

}

export const create = async (data) => {

    try {
        const res = await instance.post("/folder", data);
        return res.data
    } catch (error) {
        console.log("Dosyalar yaratılırken  hata oluştu ");
        throw error;
    }
}

export const findById = async (id) => {

    try {
        const res = await instance.get(`/folder/${id}`);
        return res.data
    } catch (error) {
        console.log("Aranan Dosya  hata oluştuşturdu ");
        throw error;
    }

    
}

export const update = async (id,data) => {

    try {
        const res = await instance.put(`/folder/${id}`,data);
        return res.data
    } catch (error) {
        console.log("Dosyalar güncelemesinde  hata oluştu ");
        throw error;
    }
}

export const patch = async (id,data) => {

    try {
        const res = await instance.patch(`/folder/${id}`,data);
        return res.data
    } catch (error) {
        console.log("Dosyalar güncellenirken  hata oluştu ");
        throw error;
    }
}

export const remove = async (id) => {

    try {
        const res = await instance.delete(`/folder/${id}`);
        return res.data
    } catch (error) {
        console.log("Dosyalar silinirken  hata oluştu ");
        throw error;
    }
}