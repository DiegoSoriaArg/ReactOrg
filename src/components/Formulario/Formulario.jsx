import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../listaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <CampoTexto 
                titulo="puesto" 
                placeholder="Ingresar Puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            />
            <CampoTexto 
                titulo="foto" 
                placeholder="Ingresar Foto" 
                required 
                valor={foto} 
                actualizarValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={setEquipo}
            />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;