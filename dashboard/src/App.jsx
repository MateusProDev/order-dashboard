import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import OrderList from "./components/OrderList";
import ordersData from "./data/orders.json";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router> {/* Certifique-se de envolver o conteúdo com o Router */}
      <>
        <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="content">
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
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
