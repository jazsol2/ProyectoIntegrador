import React from "react";
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Agencias from "./components/Agencias";
import Clientes from "./components/Clientes";
import Paquetes from "./components/Paquetes";
import Bancos from "./components/Bancos";
import Transacciones from "./components/Transacciones";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agencias" element={<Agencias />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/bancos" element={<Bancos />} />
        <Route path="/transacciones" element={<Transacciones />} />
      </Routes>
    </Router>
  );
}

export default App;

