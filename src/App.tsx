import * as C from "./App.styles";
import { useEffect,useState } from "react";
import {getAll } from "../src/services/photoService";
import { Imagem } from "./Type/imagemType";





const  App =()=> {

  const [loading,setLoading]=useState(false)
  const [photos, setPhotos]=useState<Imagem[]>([])

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

      {loading&&
        <C.ScreenWarning>
        <div>carregando</div>
     </C.ScreenWarning>
      }
      {!loading && photos.length>0 &&

        <C.PhotoList>
       {photos.map((item , index)=>(
  <div>{item.url}</div>
      


       ))}
      </C.PhotoList>
      }
      </C.Area>

    </C.Container>
  );
}

export default App;
