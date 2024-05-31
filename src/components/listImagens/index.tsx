import * as C from "./stiled";

type props={
    name:string,
    url:string
}
export const Item=({url,name}:props)=>{


    return(

        <C.container>
            <img src={url} alt={name} />
        </C.container>




    )
}