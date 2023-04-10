import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/miOrg/index';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarForm, actualizarForm] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/DiegoSoriaArg.png",
      nombre: "Diego Soria",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/Edgar8D.png",
      nombre: "Edgar",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/aloide.png",
      nombre: "Alo Molina",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/alezzard.png",
      nombre: "Alejandro Godoy",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/BelacdowN.png",
      nombre: "Heber Caleb Cuevas",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/DiegoSoriaArg.png",
      nombre: "Diego Soria",
      puesto: "Full Stack Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/MaxiBracamonte.png",
      nombre: "Maxi Bracamonte",
      puesto: "Full Stack Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/alezzard.png",
      nombre: "Alejandro Godoy",
      puesto: "Full Stack Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/aloide.png",
      nombre: "Alo Molina",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/RoqueGZ.png",
      nombre: "Roque",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/FrancoRF.png",
      nombre: "Franco",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto: "https://github.com/DiegoSoriaArg.png",
      nombre: "Diego Soria",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovacion y Gestion",
      foto: "https://github.com/DiegoSoriaArg.png",
      nombre: "Diego Soria",
      puesto: "Architect Software",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovacion y Gestion",
      foto: "https://github.com/alezzard.png",
      nombre: "Alejandro Godoy",
      puesto: "Design",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Backend",
      foto: "https://github.com/DiegoSoriaArg.png",
      nombre: "Diego Soria",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Backend",
      foto: "https://github.com/FedericoMilesi.png",
      nombre: "Federico Milesi",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Backend",
      foto: "https://github.com/alezzard.png",
      nombre: "Alejandro Godoy",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Backend",
      foto: "https://github.com/BelacdowN.png",
      nombre: "Heber Caleb Cuevas",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/aloide.png",
      nombre: "Alo Molina",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/alezzard.png",
      nombre: "Alejandro Godoy",
      puesto: "Developer",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/DiegoSoriaArg.png",
      nombre: "Diego Soria",
      puesto: "Developer",
      fav: false,
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "Backend",
      colorPrimario: "#240000",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
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
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
    alert("Colaborador eliminado");
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
  }

  //Like
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    });

    actualizarColaboradores(colaboradoresActualizados);
  }

  //Alternativa de ternario: { mostrarForm === true ? <Formulario /> : <></>}
  return (
    <div>
      <Header />
      {mostrarForm && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
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
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
