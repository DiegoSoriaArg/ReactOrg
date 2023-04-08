import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const equipos = [
        "Programacion",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
};

export default ListaOpciones;