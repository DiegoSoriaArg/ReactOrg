import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../listaOpciones";

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="puesto" placeholder="Ingresar Puesto"/>
            <CampoTexto titulo="foto" placeholder="Ingresar Foto"/>
            <ListaOpciones />
        </form>
    </section>
}

export default Formulario;