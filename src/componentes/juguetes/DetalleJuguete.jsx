import { useEffect, useState } from "react";
import { detallejugueteJson } from "./datosjuguetes";
import { Link, useParams } from "react-router-dom";


function DetalleJuguete(){
    const {id} = useParams();
    console.log(id)
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fecthData = async () =>{
            try{
                const data = await detallejugueteJson();
                setPersonajes(data);
                setLoading(false);
                console.log(personajes)
            }catch(error){
                    console.log({error: "no llego"})
                    setLoading(false);
                }
            };
            
            
            fecthData();
        },[]);
        return(
            <div>
                
                <h2>Detalle</h2>
                
                
            </div>
        );
    }

export default DetalleJuguete;