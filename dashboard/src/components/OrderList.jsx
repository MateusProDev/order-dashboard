import React from "react";
import "./OrderList.css";

function OrderList({ orders }) {
  return (
    <table className="order-list">
      <thead>
        <tr>
          <th>Data</th>
          <th>Produto</th>
          <th>Valor Total (R$)</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.data}</td>
            <td>
              {order.produtos.map((produto, index) => (
                <div key={index}>{produto.nome}</div>
              ))}
            </td>
            <td>{order.valorTotal.toFixed(2)}</td>
            <td>{order.cliente.email}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderList;
