import { useState } from "react";

import "./App.css";
import Principal from "./layout/principal.jsx";
import UsuarioResponsable from "./components/UsuarioResponsable.jsx";
import Papeletas from "./components/Papeletas.jsx";
import ConteoVotos from "./components/ConteoVotos.jsx";
import Tabla from "./components/Tabla.jsx";

function App() {
  

  return (
    <>
      <div>
        <Principal />
        <UsuarioResponsable />
       
        
        
      </div>
    </>
  );
}

export default App;
