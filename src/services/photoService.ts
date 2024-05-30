import { Imagem } from "../Type/imagemType";
import {storage} from  '../libs/fireBase'
import { ref,listAll,getDownloadURL } from "firebase/storage";


export const getAll = async ()=>{
    const listPhotos:Imagem[] = []

    const refPhoto=  ref(storage,"gs://dataprojectreact.appspot.com/imagens")
    const photoList = await listAll(refPhoto)  

    for (let i in photoList.items ) {
        const photoUrl= await getDownloadURL(photoList.items[i]) 

        listPhotos.push({
            name:photoList.items[i].name,
            url :photoUrl
        })
        
    }


return listPhotos
}