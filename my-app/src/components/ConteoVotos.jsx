function ConteoVotos({setConteoVotosData}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setConteoVotosData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

  return (
    <div className="container mx-auto border-t-4 border-black">
      <h1 className="text-center font-bold text-2xl mb-10 mt-10">
        Escrutino o Conteo de votos
      </h1>
      <form>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Presidente Lista 1</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Presidente Lista 2</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
                onChange={handleChange}
            />
          </div>
          <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Presidente Lista 3</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
                onChange={handleChange}
            />
          </div>
          <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Votos en blanco</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Votos nulos</label>
          </div>
          <div className="w-1/3">
            <input
              type="text"
              className="mr-2 border border-gray-300 rounded px-2 py-1"
                onChange={handleChange}
            />
          </div>
          <div className="w-1/3">
            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Editar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              Validar
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label className="mr-2">Total de votos</label>
          </div>
          <div className="w-1/3">
            <label className="mr-2 font-bold"></label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ConteoVotos;
