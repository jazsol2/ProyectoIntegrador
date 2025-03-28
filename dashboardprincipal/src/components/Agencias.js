import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Agencias = () => {
  
  const navigate = useNavigate();
      useEffect(() => {
      
          window.location.href = "http://localhost:3000";
          navigate('/');
      }, [navigate]);
  
    return (
      <div>
        <h2>Redirigiendo...</h2>
      </div>
    )
 
};

export default Agencias;
