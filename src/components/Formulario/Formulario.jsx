import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../listaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Hola");
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="nombre" placeholder="Ingresar Nombre" required/>
            <CampoTexto titulo="puesto" placeholder="Ingresar Puesto" required/>
            <CampoTexto titulo="foto" placeholder="Ingresar Foto" required/>
            <ListaOpciones />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;