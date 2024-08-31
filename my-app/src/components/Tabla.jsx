import axios from "axios";
import React, { useEffect, useState } from "react";

function Tabla({ refreshData, onEdit }) {
  const [actas, setActas] = useState([]);
  const [totales, setTotales] = useState({
    lista1: 0,
    lista2: 0,
    lista3: 0,
  });

  const [ganadora, setGanadora] = useState("");

  const obtenerActas = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/api/actas");
      setActas(respuesta.data);
      const totalLista1 = respuesta.data.reduce(
        (acc, acta) => acc + (acta.lista1 || 0),
        0
      );
      const totalLista2 = respuesta.data.reduce(
        (acc, acta) => acc + (acta.lista2 || 0),
        0
      );
      const totalLista3 = respuesta.data.reduce(
        (acc, acta) => acc + (acta.lista3 || 0),
        0
      );

      setTotales({
        lista1: totalLista1,
        lista2: totalLista2,
        lista3: totalLista3,
      });

      determinarGanadora(totalLista1, totalLista2, totalLista3);
    } catch (error) {
      console.log(error);
    }
  };

  const determinarGanadora = (totalLista1, totalLista2, totalLista3) => {
    if (totalLista1 > totalLista2 && totalLista1 > totalLista3) {
        setGanadora("Lista 1");
    } else if (totalLista2 > totalLista1 && totalLista2 > totalLista3) {
        setGanadora("Lista 2");
    } else if (totalLista3 > totalLista1 && totalLista3 > totalLista2) {
        setGanadora("Lista 3");
    } else {
        setGanadora("Empate");
    }
    };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/acta/${id}`);
      obtenerActas();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerActas();

    const interval = setInterval(obtenerActas, 10000);
    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  useEffect(() => {
    if (refreshData) {
      obtenerActas();
    }
  }, [refreshData]);
return (
    <>
        <div className="pt-12 border-t-4 border-black">
            <h2 className="mb-3 font-bold text-xl">DATOS RECOPILADOS</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            N° Acta
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Responsable
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Cedula
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Lista 1
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Lista 2
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Lista 3
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Votos Blancos
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Votos Nulos
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Total Votos
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {actas.map((acta) => (
                        <tr key={acta._id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {acta.numeroActa}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {acta.responsable}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{acta.cedula}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{acta.lista1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{acta.lista2}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{acta.lista3}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {acta.votosBlancos}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {acta.votosNulos}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {acta.totalVotos}
                                {/* {acta.votosBlancos + acta.votosNulos}  Total Votos */}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => onEdit(acta)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(acta._id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pt-4 text-left">
                <h3 className="text-2xl font-semibold mt-5">Resumen de Votos</h3>
                <p className="font-bold">Lista 1: {totales.lista1} votos</p>
                <p className="font-bold">Lista 2: {totales.lista2} votos</p>
                <p className="font-bold">Lista 3: {totales.lista3} votos</p>
                <p className="font-bold mt-2">El Representante electo es: {ganadora}</p>
            </div>
        </div>
    </>
);
}

export default Tabla;
