import { useEffect, useState } from "react";
import { juguetesJson } from "./datosJuguetes";
import { DetalleJugueteJson } from "./datosJuguetes";
import { useParams } from "react-router-dom";


function DetalleJuguetes(){
    const {id} = useParams();
    console.log(id)
    const [detallepersonaje, setDetallepersonaje] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fecthDato = async  () =>{
            try{
                const data = await DetalleJugueteJson();
                console.log("alfo")
                setDetallepersonaje(data);
                setLoading(false);
            }catch(error){
                    setLoading(false);
                  
                    console.error({error:"no llego"});
                }
            };
            
            
            fecthDato();
        },[]);
        return(
            <div>
                
                <h2>listado</h2>
                
                {loading ?(<p>cargando personajes</p>):(
                    <ul className="listaJuguetes">
                        
                        {detallepersonaje.map((personaje) =>(
                            <li key={personaje.codigo} className="personaje-item">
                               <hr></hr>
                                <h3>{personaje.nombre}</h3>
                            
                                
                            </li>
                        ))}
                        
                    </ul>
                )}
            </div>
        );
    }

export default DetalleJuguetes;