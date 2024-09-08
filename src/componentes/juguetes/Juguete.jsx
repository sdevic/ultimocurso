

function Juguete (props){

    return(
        <section className="seccion">
            <h2>{props.nombre}</h2>
            <p>{props.codigo}</p>
            <img src={props.imagen} alt={props.nombre} />
            <p>{props.precio}</p>
            <p>{props.stock}</p>

        </section>
    )
}

export default Juguete;