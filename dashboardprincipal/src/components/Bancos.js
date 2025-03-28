import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Bancos = () => {
  
  const navigate = useNavigate();
      useEffect(() => {
      
          window.location.href = "https://bancos";
          navigate('/');
      }, [navigate]);
  
    return (
      <div>
        <h2>Redirigiendo...</h2>
      </div>
    )
 
};

export default Bancos;