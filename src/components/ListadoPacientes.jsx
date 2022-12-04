import Paciente from './Paciente';

const ListadoPacientes = ({
  pacientesLista,
  eliminarPaciente,
  setPacienteSeleccionado,
}) => {
  return (
    <div className="mt-10 md:w-2/4 lg:w-3/5">
      <h2 className="text-center font-black text-2xl">Listado de Pacientes</h2>
      <p className="mt-2 text-center">
        Administra tus{' '}
        <span className="text-indigo-700 font-bold">Pacientes y Citas</span>
      </p>

      <div className="overflow-y-scroll scrollbar-hide h-[40rem]">
        {pacientesLista.map((paciente) => {
          return (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              eliminarPaciente={eliminarPaciente}
              setPacienteSeleccionado={setPacienteSeleccionado}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListadoPacientes;
