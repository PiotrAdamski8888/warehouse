import React from "react";

const OrderList = () => {
  const orders = [
    { id: 1, partCode: "SN.częsci", partName: "Nazwa części " },
    { id: 2, partCode: "SN.częsci", partName: "Nazwa części " },
    { id: 3, partCode: "SN.częsci", partName: "Nazwa części " },
    { id: 4, partCode: "SN.częsci", partName: "Nazwa części " },
  ];

  return (
    <div className="order-list">
      <h2>Lista Zamówień</h2>
      <ul className="list">
        {orders.map((order) => (
          <li key={order.id} className="list-item order-item-transform">
            Nazwa Urządzenia | {order.partCode} | {order.partName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
