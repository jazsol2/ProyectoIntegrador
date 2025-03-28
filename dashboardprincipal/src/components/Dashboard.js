import React from "react";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
       <div className="header">
       <div className="background-image">
        <h1>Bienvenido al Sistema WeiShen Alibaba</h1>
        <p>Los mejores destinos para conocer</p>
       </div>
      <div className="card-container">
        <div className="card">
          <img src="agencias.jpeg" alt="Agencias" />
          <Link to="/agencias">
            <button className="dashboard-button">Ir a Agencias</button>
          </Link>
        </div>

        <div className="card">
          <img src="clientes.jpg" alt="Clientes" />
          <Link to="/clientes">
            <button className="dashboard-button">Ir a Clientes</button>
          </Link>
        </div>

        <div className="card">
          <img src="paquetes.jpeg" alt="Paquetes" />
          <Link to="/paquetes">
            <button className="dashboard-button">Ir a Paquetes</button>
          </Link>
        </div>

        <div className="card">
          <img src="Bancos.jpeg" alt="Bancos" />
          <Link to="/bancos">
            <button className="dashboard-button">Ir a Bancos</button>
          </Link>
        </div>

        <div className="card">
          <img src="compra.jpeg" alt="Transacciones" />
          <Link to="/transacciones">
            <button className="dashboard-button">Ir a Transacciones</button>
          </Link>
        </div>
       </div>
      </div>
    </div>
  );
};
export default Dashboard;

