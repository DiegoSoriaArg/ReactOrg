import "./Equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //Destructuracion de los props
    const { colorPrimario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
    const estiloTitulo = {borderColor: colorPrimario};

    return <>
        { colaboradores.length > 0 && 
            <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
            <input
                type="color"
                className="input-color"
                value={hexToRgba(colorPrimario, 0.6)}
                onChange={(e) => {
                    actualizarColor(e.target.value, id);
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, i) => <Colaborador 
                        datos={colaborador} 
                        key={i} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export default Equipo;