import './Seccion.css';
import heman from '../../assets/img/he-man.png';
import Boton from '../boton/Boton';
import ListaJuguetes from '../juguetes/Listajuguetes';

const handleClicBoton = ()=>{
    alert('preuba');
}


function Seccion(){
    return(

        <section className="body">
           
            <img src={heman} />  
            <Boton texto = "ver"  />
            <Boton color="red" texto = "Desver" onClick={handleClicBoton} />
           
        </section>
    )


}


export default Seccion;