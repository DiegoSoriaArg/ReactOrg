import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/miOrg/index';

function App() {
  const [mostrarForm, actualizarForm] = useState(true);

  //Ternario --> condicion ? xxxx: xxxx
  //condicion && xxxx

  const cambiar = () => {
    actualizarForm(!mostrarForm);
  };

  //Alternativa de ternario: { mostrarForm === true ? <Formulario /> : <></>}
  return (
    <div>
      <Header />
      {mostrarForm && <Formulario />}
      <MiOrg cambiar={cambiar} />
    </div>
  );
}

export default App;
