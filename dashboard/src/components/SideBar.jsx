import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faMoneyBillWave, faShoppingCart, faBoxOpen, faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

const SideBar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/financeiro">
              <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
              Financeiro
            </Link>
          </li>
          <li>
            <Link to="/pedidos">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              Pedidos
            </Link>
          </li>
          <li>
            <Link to="/products">
              <FontAwesomeIcon icon={faBoxOpen} className="icon" />
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/configuracao">
              <FontAwesomeIcon icon={faCog} className="icon" />
              Configuração
            </Link>
          </li>
          <li>
            <Link to="/ajuda">
              <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
              Ajuda
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
