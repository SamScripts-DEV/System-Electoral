function UsuarioResponsable() {
return (
    <div>
        <h1 className="text-center text-2xl font-bold">ACTA ELECTORAL</h1>
        <div className="flex justify-center mt-4">
            <input
                type="text"
                placeholder="Responsable"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md"
                pattern="[A-Za-z]+"
                title="Ingrese correctamente el nombre del responsable"
                required
            />
            <input
                type="text"
                placeholder="Número de cédula"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md"
                pattern="[0-9]{1,10}"
                title="Ingrese correctamente su número de cédula"
                required
            />
            <input
                type="number"
                placeholder="Acta número"
                className="px-4 py-2 border border-gray-300 rounded-md"
                required
            />
        </div>
    </div>
);
}

export default UsuarioResponsable;