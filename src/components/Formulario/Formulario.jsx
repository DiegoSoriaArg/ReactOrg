import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        
        registrarColaborador(datosAEnviar);
    }

    const manejarEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <Campo 
                titulo="puesto" 
                placeholder="Ingresar Puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            />
            <Campo 
                titulo="foto" 
                placeholder="Ingresar Foto" 
                required 
                valor={foto} 
                actualizarValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={setTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex." 
                required 
                valor={color} 
                actualizarValor={setColor}
                type="color"
            />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario;