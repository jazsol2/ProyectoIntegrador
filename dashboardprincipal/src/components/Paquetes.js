import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Paquetes = () => {
  
  const navigate = useNavigate();
      useEffect(() => {
      
          window.location.href = "http://paquetes";
          navigate('/');
      }, [navigate]);
  
    return (
      <div>
        <h2>Redirigiendo...</h2>
      </div>
    )
 
};

export default Paquetes;