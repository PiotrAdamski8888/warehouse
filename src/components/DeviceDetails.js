import React from 'react';
import OrderForm from './OrderForm';

const DeviceDetails = ({ device, onClose, role }) => {
  return (
    <div className="device-details-overlay" onClick={onClose}>
      <div className="device-details" onClick={e => e.stopPropagation()}>
        <h3>{device.name}</h3>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {role === 'technik' ? (
          <OrderForm deviceId={device.id} onSubmit={onClose} />
        ) : (
          <p>Szczegóły urządzenia: stan czesci</p>
        )}
      </div>
    </div>
  );
};

export default DeviceDetails;
