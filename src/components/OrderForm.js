import React, { useState } from "react";

const OrderForm = ({ deviceId, onSubmit }) => {
  const [partCode, setPartCode] = useState("");
  const [partName, setPartName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Zamówiono część dla urządzenia ${deviceId}:`, {
      partCode,
      partName,
    });
    // Dodaj logikę wysyłania zamówienia
    setPartCode("");
    setPartName("");
    onSubmit(); // Funkcja przekazana z props po złożeniu zamówienia
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h4>Zamów część dla urządzenia {deviceId}</h4>
      <input
        type="text"
        value={partCode}
        onChange={(e) => setPartCode(e.target.value)}
        placeholder="Kod części"
      />
      <input
        type="text"
        value={partName}
        onChange={(e) => setPartName(e.target.value)}
        placeholder="Nazwa części"
      />
      <button type="submit">Zamów Część</button>
    </form>
  );
};

export default OrderForm;
