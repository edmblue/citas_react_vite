import { useEffect } from 'react';
import { useState } from 'react';
import Error from './Error';

const Formulario = ({
  setPacientesLista,
  pacienteSeleccionado,
  setPacienteSeleccionado,
}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteSeleccionado).length > 0) {
      setNombre(pacienteSeleccionado.nombre);
      setPropietario(pacienteSeleccionado.propietario);
      setEmail(pacienteSeleccionado.email);
      setFecha(pacienteSeleccionado.fecha);
      setSintomas(pacienteSeleccionado.sintomas);
    }
  }, [pacienteSeleccionado]);

  const handleSubmit = () => {
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    const generarID = () => {
      const random = Math.random().toString(36).slice(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
    };

    const pacienteObjeto = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: '',
    };

    if (Object.keys(pacienteSeleccionado).length > 0) {
      pacienteObjeto.id = pacienteSeleccionado.id;

      setPacientesLista((pacientes) => {
        return pacientes.map((paciente) => {
          if (paciente.id === pacienteObjeto.id) {
            return pacienteObjeto;
          } else {
            return paciente;
          }
        });
      });

      setPacienteSeleccionado({});
    } else {
      pacienteObjeto.id = generarID();
      setPacientesLista((pacientes) => {
        return [...pacientes, pacienteObjeto];
      });
    }

    setNombre('');
    setEmail('');
    setPropietario('');
    setFecha('');
    setSintomas('');
  };

  return (
    <div className="mt-10 md:w-2/4 lg:w-2/5">
      <h2 className="text-center font-black text-2xl">Seguimiento Pacientes</h2>
      <p className="mt-2 text-center rounded">
        Añade Pacientes y{' '}
        <span className="text-indigo-700 font-bold">Administralos</span>
      </p>

      <div className="mt-8 bg-white py-4 px-4 w-full rounded shadow-lg">
        <div className="mb-2">
          {error && (
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          )}
          <label className="uppercase font-bold block mb-2" htmlFor="nombre">
            Nombre Mascota
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre de la Mascota"
            className="py-0.5 px-1 border-2 w-full"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            className="uppercase font-bold block mb-2"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            name="propietario"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="py-0.5 px-1 border-2 w-full"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="uppercase font-bold block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email del Propietario"
            className="py-0.5 px-1 border-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="uppercase font-bold block mb-2" htmlFor="fecha">
            Alta
          </label>
          <input
            type="date"
            name="fecha"
            id="fecha"
            className="py-0.5 px-1 border-2 w-full"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="uppercase font-bold block mb-2" htmlFor="sintomas">
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2"
            name="sintomas"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-700 font-bold uppercase w-full text-white py-2 hover:bg-indigo-900 cursor-pointer"
          value={
            Object.keys(pacienteSeleccionado).length > 0
              ? 'Editar Paciente'
              : 'Agregar Paciente'
          }
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Formulario;
