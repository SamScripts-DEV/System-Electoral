import { useState } from "react";
import axios from 'axios'
import Tabla from "./Tabla";

function UsuarioResponsable() {
    const [form, setForm] = useState({
        
        responsable: '',
        cedula: '',
        numeroActa: '',
        papeletasEntregadas: '',
        papeletasDevueltas: '',
        totalEmpadronados: '',
        totalElectores: '',
        lista1: '',
        lista2: '',
        lista3: '',
        votosBlancos: '',
        votosNulos: '',
    })
    const [refresh, setRefresh] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const papeletasEntregadas = parseInt(form.papeletasEntregadas || 0);
        const papeletasDevueltas = parseInt(form.papeletasDevueltas || 0);
        const totalVotos = parseInt(form.lista1) + parseInt(form.lista2) + parseInt(form.lista3) + parseInt(form.votosBlancos) + parseInt(form.votosNulos);
        const totalElectores = parseInt(form.totalElectores || 0);
        const totalEmpadronados = parseInt(form.totalEmpadronados || 0);

        if(papeletasEntregadas !== totalEmpadronados) {
            alert('El total de empadronados no coincide con las papeletas entregadas');
            return;
        }
        if (papeletasEntregadas < papeletasDevueltas) {
            alert('Las papeletas devueltas no pueden ser mayores a las entregadas');
            return;
        }
        if((papeletasEntregadas - papeletasDevueltas) !== totalElectores) {
            alert('El total de electores no coincide con la diferencia de papeletas entregadas y devueltas');
            return;
        }
        if (totalVotos !== totalElectores) {
            alert('El total de votos no coincide con el total de electores');
            return;
        }
        try {
          const url = form._id ? `http://localhost:3000/api/acta/${form._id}` : 'http://localhost:3000/api/registrar';
          const method = form._id ? 'PUT' : 'POST';
          console.log('Sending data:', form); // Agrega esto para verificar los datos enviados
          const res = await axios({ url, method, data: form });
          console.log('Response:', res);
          setRefresh(!refresh);
          setForm({
              _id: '',
              responsable: '',
              cedula: '',
              numeroActa: '',
              papeletasEntregadas: '',
              papeletasDevueltas: '',
              totalEmpadronados: '',
              totalElectores: '',
              lista1: '',
              lista2: '',
              lista3: '',
              votosBlancos: '',
              votosNulos: '',
          });
        } catch (error) {
            console.log('Error:', error);
            if (error.response && error.response.data && error.response.data.error) {
              alert(`Error: ${error.response.data.error}`);
          } else {
              alert('Error desconocido al procesar la solicitud.');
          }
        }
    }

    const handleEdit = async (acta) => {
        setForm({
            _id: acta._id,
            responsable: acta.responsable,
            cedula: acta.cedula,
            numeroActa: acta.numeroActa,
            papeletasEntregadas: acta.papeletasEntregadas,
            papeletasDevueltas: acta.papeletasDevueltas,
            totalEmpadronados: acta.totalEmpadronados,
            totalElectores: acta.totalElectores,
            lista1: acta.lista1,
            lista2: acta.lista2,
            lista3: acta.lista3,
            votosBlancos: acta.votosBlancos,
            votosNulos: acta.votosNulos,
        });
    }
   
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="text-center text-2xl font-bold">ACTA ELECTORAL</h1>

        <div className="flex justify-center mt-4">
          <input
            type="text"
            id="responsable"
            name="responsable"
            placeholder="Responsable"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md"
            pattern="[A-Za-z]+"
            title="Ingrese correctamente el nombre del responsable"
            required
            onChange={handleChange}
            value={form.responsable || ""}
            
          />
          <input
            type="text"
            placeholder="Número de cédula"
            id="cedula"
            name="cedula"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md"
            pattern="[0-9]{1,10}"
            title="Ingrese correctamente su número de cédula"
            required
            onChange={handleChange}
            value={form.cedula || ""}
            
          />
          <input
            id="numeroActa"
            name="numeroActa"
            type="number"
            placeholder="Acta número"
            className="px-4 py-2 border border-gray-300 rounded-md"
            required
            onChange={handleChange}
            value={form.numeroActa || ""}
            
          />
        </div>
      </div>
      <div className="m-12">
        <h1 className="text-center font-bold text-xl">
          Sufragio general 25 de febrero 2025
        </h1>

        <div className="flex flex-col m-12">
          <div className="w-full mb-4 text-left">
            <label htmlFor="">Papeletas Entregadas: </label>
            <input
              type="text"
              id="papeletasEntregadas"
                name="papeletasEntregadas"
              className="border-b border-gray-300 p-2"
              placeholder="Ingrese una cantidad"
                onChange={handleChange}
                value={form.papeletasEntregadas || ""}
             
            />
          </div>
          <div className="w-full mb-4 text-left">
            <label htmlFor="">Papeletas Devueltas: </label>
            <input
              type="text"
                id="papeletasDevueltas"
                name="papeletasDevueltas"
              className="border-b border-gray-300 p-2"
              placeholder="Ingrese una cantidad"
              onChange={handleChange}
                value={form.papeletasDevueltas || ""}
              
            />
          </div>
          <div className="w-full mb-4 text-left">
            <label htmlFor="">Total de Empadronados: </label>
            <input
              type="text"
                id="totalEmpadronados"
                name="totalEmpadronados"
              className="border-b border-gray-300 p-2"
              placeholder="Ingrese una cantidad"
                onChange={handleChange}
                value={form.totalEmpadronados || ""}
              
            />
          </div>
          <div className="w-full mb-4 text-left">
            <label htmlFor="">Total de Electores: </label>
            <input
              type="text"
                id="totalElectores"
                name="totalElectores"
              className="border-b border-gray-300 p-2"
              placeholder="Ingrese una cantidad"
                onChange={handleChange}
                value={form.totalElectores || ""}
            
             
            />
          </div>
        </div>
        {/* <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
            Agregar
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Validar
          </button>
        </div> */}
      </div>
      <div className="container mx-auto border-t-4 border-black">
        <h1 className="text-center font-bold text-2xl mb-10 mt-10">
          Escrutino o Conteo de votos
        </h1>

        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Presidente Lista 1</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
              id="lista1"
                name="lista1"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
              value={form.lista1 || ""} 
                onChange={handleChange}
              
            />
          </div>
          {/* <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div> */}
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Presidente Lista 2</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
                id="lista2"
                name="lista2"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
                value={form.lista2 || ""}
                onChange={handleChange}
              
            />
          </div>
          {/* <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div> */}
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Presidente Lista 3</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
                id="lista3"
                name="lista3"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
              value={form.lista3 || ""}
                onChange={handleChange}
              
            />
          </div>
          {/* <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div> */}
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Votos en blanco</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
                id="votosBlancos"
                name="votosBlancos"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
              value={form.votosBlancos || ""}
                onChange={handleChange}
              
            />
          </div>
          {/* <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div> */}
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Votos nulos</label>
          </div>
          <div className="w-1/3">
            <input
                id="votosNulos"
                    name="votosNulos"
              type="text"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
              value={form.votosNulos}
                onChange={handleChange}
              
            />
          </div>
          {/* <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div> */}
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Total de votos</label>
          </div>
          <div className="w-1/3">
            <label className="mr-2 font-bold">{parseInt(form.lista1) + parseInt(form.lista2) + parseInt(form.lista3) + parseInt(form.votosBlancos) + parseInt(form.votosNulos)}</label>
          </div>
        </div>
      </div>
      <button
          className="mt-4 p-2 bg-blue-500 text-white rounded mb-6"
          
        >
          {form._id ? 'Actualizar Acta' : 'Registrar Acta'}
        </button>
        </form>
        <Tabla refreshData={refresh} onEdit={handleEdit} />
    </>
  );
}

export default UsuarioResponsable;
