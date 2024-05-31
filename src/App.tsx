import * as C from "./App.styles";
import { useEffect,useState, FormEvent } from "react";
import {getAll,sendImage } from "../src/services/photoService";
import { Imagem } from "./Type/imagemType";
import {Item} from '../src/components/listImagens/index'


// fazer afunçao que ira mudar o status do load 
//e enviar o submit para o componente

const  App =()=> {
  
  const [loading,setLoading]=useState(false)
  const [photos, setPhotos]=useState<Imagem[]>([])
  const [loadingPhoto, setLoadinPhotos]=useState(false)
  
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setLoadinPhotos(true);
      let result = await sendImage(file);
      setLoadinPhotos(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }
  useEffect(()=>{
    getPhotos();
  }, []);

    
  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await getAll());
    setLoading(false);
  }
  
  return (
    <C.Container>
      <C.Area>

<C.Header >Galeria de Fotos</C.Header>
<C.UploadForm method="POST" onSubmit={handleFormSubmit}>
<input type="file" name="image" />
          <input type="submit" value="Enviar" />

</C.UploadForm>

      {loading&&
        <C.ScreenWarning>
        <div>carregando</div>
     </C.ScreenWarning>
      }
      {!loading && photos.length>0 &&

        <C.PhotoList >
          {photos.map((item,index)=>(

            <Item key={index} name={item.name}url={item.url}/>

          ))

          }


       
      </C.PhotoList>
      }
      </C.Area>

    </C.Container>
  );
}

export default App;
