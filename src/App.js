import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/miOrg/index';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarForm, actualizarForm] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
      equipo: "Front-End",
      foto: "https://github.com/DiegoSoriaArg.png",
      nombre: "Diego Soria",
      puesto: "Developer"
  }]);
  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  //Ternario --> condicion ? xxxx: xxxx
  //condicion && xxxx
  const cambiar = () => {
    actualizarForm(!mostrarForm);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("hola");
  }

  //Actualizar color de equipo
  const actualizarColor = (color, titulo) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }

  //Alternativa de ternario: { mostrarForm === true ? <Formulario /> : <></>}
  return (
    <div>
      <Header />
      {mostrarForm && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <MiOrg cambiar={cambiar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
