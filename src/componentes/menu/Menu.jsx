import { Link } from "react-router-dom"
//creo el menu y lo linkeo a la ruta que corresponde
const Menu = () =>{
return(
    <nav className="menu">
        <ul>
            <li><Link to="/">Inicio</Link> </li>
            <li><Link to="/juguetes">Juguetes</Link> </li>
            <li><Link to="/Login">Log in</Link> </li>
           
        </ul>
    </nav>
)

}
export default Menu;