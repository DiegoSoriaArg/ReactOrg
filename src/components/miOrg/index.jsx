//import { useState } from "react";
import "./miOrg.css"

const MiOrg = (props) => {

    //Definimos un estado
    /* const [mostrar, actualizarEstado] = useState(true);
    const manejarClick = () => {
        actualizarEstado(!mostrar);
    }; */

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="./img/addForm.png" alt="Agregar colaborador" onClick={props.cambiar} />
    </section>
};

export default MiOrg;