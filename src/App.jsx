import { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientesLista, setPacientesLista] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState({});

  useEffect(() => {
    const listaRecuperada = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientesLista(listaRecuperada);
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientesLista));
  }, [pacientesLista]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientesLista.filter(
      (paciente) => paciente.id !== id
    );

    setPacientesLista(pacientesActualizados);
  };

  return (
    <div className="container h-screen flex justify-center items-center mx-auto flex-col">
      <Header />

      <div className="md:flex w-full gap-x-2">
        <Formulario
          setPacientesLista={setPacientesLista}
          pacienteSeleccionado={pacienteSeleccionado}
          setPacienteSeleccionado={setPacienteSeleccionado}
        />

        <ListadoPacientes
          pacientesLista={pacientesLista}
          eliminarPaciente={eliminarPaciente}
          setPacienteSeleccionado={setPacienteSeleccionado}
        />
      </div>
    </div>
  );
}

export default App;
