import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Principal from "./layout/principal.jsx";
import UsuarioResponsable from "./components/UsuarioResponsable.jsx";
import Papeletas from "./components/Papeletas.jsx";
import ConteoVotos from "./components/ConteoVotos.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Principal />
        <UsuarioResponsable />
        <Papeletas />
        <ConteoVotos />
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Agregar Acta
        </button>
      </div>
    </>
  );
}

export default App;
