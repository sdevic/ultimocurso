import { useEffect, useState } from "react";
import { juguetesJson } from "./datosJuguetes";
import { Link } from "react-router-dom";


function ListaJuguetes(){

    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fecthData = async () =>{
            try{
                const data = await juguetesJson();
                setPersonajes(data);
                setLoading(false);
            }catch(error){
                    console.error("error fecth data",error);
                    setLoading(false);
                }
            };
            
            
            fecthData();
        },[]);
        return(
            <div>
                
                <h2>listado</h2>
                
                {loading ?(<p>cargando personajes</p>):(
                    <ul className="listaJuguetes">
                        
                        {personajes.map((personaje) =>(
                            <li key={personaje.codigo} className="personaje-item">
                               <hr></hr>
                                <h3>{personaje.nombre}</h3>
                                <p>Precio: $ {personaje.precio}</p>
                                <Link to={`./DetalleJuguete/${personaje.codigo}`}>Ver detalle</Link>
                                
                                
                            </li>
                        ))}
                        
                    </ul>
                )}
            </div>
        );
    }

export default ListaJuguetes;