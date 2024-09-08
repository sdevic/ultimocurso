

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



export const DetalleJugueteJson = async ()=>{
    console.log("entro")
    
     const BASE ="./api/datojuguete.json"; 
     try{
     const response = await fetch(BASE)
     const data = await response.json();
     console.log("aca tambien")
     return data;
    }catch(eror){  
     console.error("error fecth data",error);
    }
     
}

