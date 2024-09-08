import './Boton.css'


function Boton(props){
    const estilosBoton = {
        backgroundColor : props.color,
    }
    return(
        <div>
            <button style={estilosBoton}className='boton' onClick={props.onClick}>{props.texto}</button>
        </div>
    )
}

export default Boton;