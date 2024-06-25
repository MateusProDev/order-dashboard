import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import OrderList from "./components/OrderList";
import SideBar from "./components/SideBar"; // Importando o componente Sidebar
import Navbar from "./components/Navbar"; // Importando o componente Navbar
import ordersData from "./data/orders.json";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";

function App() {
  const [totalValue, setTotalValue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
    setTotalOrders(ordersData.length);
    setTotalValue(ordersData.reduce((sum, order) => sum + order.valorTotal, 0));
  }, []);

  return (
    <Router>
      <>
        <Navbar /> {/* Adicionando o componente Navbar */}
        <SideBar /> {/* Usando o componente Sidebar */}
        <div className="content">
          <div className="dashboard">
            <div className="header">
              <h1>Financeiro</h1>
            </div>
            <div className="cards">
              <Card
                title="Total de Pedidos (R$)"
                value={`R$ ${totalValue.toFixed(2)}`}
              />
              <Card title="Total de Pedidos (Unidades)" value={totalOrders} />
            </div>
            <OrderList orders={orders} />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
