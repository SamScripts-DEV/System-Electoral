import Logo from "../images/descarga.jpeg";

function Principal() {
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <img src={Logo} alt="Logo CNE" />
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-blue-700 text-center pl-20">
            ELECCIONES PRESIDENCIALES ECUADOR 2025
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Principal;
