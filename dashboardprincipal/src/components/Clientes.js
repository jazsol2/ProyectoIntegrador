import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Clientes = () => {
    const navigate = useNavigate();
    useEffect(() => {
    
        window.location.href = "http://localhost:3000";
        navigate('/'); // Redirige al Dashboard sin recargar la página
    }, [navigate]);

  return (
    <div>
      <h2>Redirigiendo...</h2>
    </div>
  )
    
};

export default Clientes;