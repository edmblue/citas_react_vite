const Paciente = ({ paciente, eliminarPaciente, setPacienteSeleccionado }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea Eliminar al Paciente?');

    if (respuesta) {
      eliminarPaciente(id);
      return;
    }
  };

  const handleEditar = () => {
    setPacienteSeleccionado(paciente);
  };

  return (
    <div className="mt-8 bg-white py-4 px-4 w-full rounded shadow-lg">
      <p className="uppercase font-bold mb-2">
        Nombre: <span className="font-normal normal-case"> {nombre} </span>
      </p>
      <p className="uppercase font-bold mb-2">
        Propietario:{' '}
        <span className="font-normal normal-case"> {propietario} </span>
      </p>
      <p className="uppercase font-bold mb-2">
        Email: <span className="font-normal normal-case"> {email} </span>
      </p>
      <p className="uppercase font-bold mb-2">
        Fecha Alta: <span className="font-normal normal-case"> {fecha} </span>
      </p>
      <p className="uppercase font-bold mb-2">
        Sintomas: <span className="font-normal normal-case"> {sintomas} </span>
      </p>
      <div className="flex justify-between mt-3">
        <button
          onClick={handleEditar}
          className="py-2 px-5 bg-indigo-700 uppercase text-white font-bold rounded hover:bg-indigo-900 hover:cursor-pointer"
        >
          Editar
        </button>
        <button
          onClick={handleEliminar}
          className="py-2 px-5 bg-red-700 uppercase text-white font-bold rounded hover:bg-red-900 hover:cursor-pointer"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
