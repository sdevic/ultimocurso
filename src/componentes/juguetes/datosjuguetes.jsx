

export const juguetesJson = async ()=>{
    const BASE_URL ="./api/datosJuguetes.json";
   try{
    const response = await fetch(BASE_URL)
    const data = await response.json();
    
    return data;
   }catch(eror){  
    console.error("error fecth data",error);
   }
    
        
}

export const detallejugueteJson = async ()=>{
    const BASE_URL ="./api/datosJuguetes.json";
    console.log("entra")
    console.log(BASE_URL)
   try{
    const response = await fetch(BASE_URL)
    const data = await response.json();
    console.log(data)
    return data;
   }catch(eror){  
    console.error("error fecth data",error);
   }
    
        
}



