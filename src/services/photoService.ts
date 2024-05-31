import { Imagem } from "../Type/imagemType";
import {storage} from  '../libs/fireBase';
import { v4 as createId } from 'uuid';


import { ref,listAll,getDownloadURL,uploadBytes } from "firebase/storage";


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
export const sendImage = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoUrl } as Imagem;
    } else {
        return new Error('Tipo de arquivo não permitido.');
    }
}
