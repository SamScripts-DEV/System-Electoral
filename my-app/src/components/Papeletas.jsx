function Papeletas() {
return (
    <>
        <div className="m-12">
            <h1 className="text-center font-bold text-xl">Sufragio general 25 de febrero 2025</h1>
            <div className="flex flex-col m-12">
                <div className="w-full mb-4 text-left">
                    <label htmlFor="">Papeletas Entregadas: </label>
                    <input type="text" className="border-b border-gray-300 p-2" placeholder="Ingrese una cantidad" />
                </div>
                <div className="w-full mb-4 text-left">
                    <label htmlFor="">Papeletas Devueltas: </label>
                    <input type="text" className="border-b border-gray-300 p-2" placeholder="Ingrese una cantidad" />
                </div>
                <div className="w-full mb-4 text-left">
                    <label htmlFor="">Total de Empadronados: </label>
                    <input type="text" className="border-b border-gray-300 p-2" placeholder="Ingrese una cantidad" />
                </div>
                <div className="w-full mb-4 text-left">
                    <label htmlFor="">Total de Electores: </label>
                    <input type="text" className="border-b border-gray-300 p-2" placeholder="Ingrese una cantidad" />
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                    Agregar
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Validar
                </button>
            </div>
        </div>
    </>
);
}

export default Papeletas;
