import React, { useState } from 'react';
import DeviceDetails from './DeviceDetails';

const DeviceList = ({ role }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const devices = [
    { id: 1, name: 'Urządzenie 1' },
    { id: 2, name: 'Urządzenie 2' },
    { id: 3, name: 'Urządzenie 3' },
    { id: 4, name: 'Urządzenie 4' },
    { id: 5, name: 'Urządzenie 5' },
    { id: 6, name: 'Urządzenie 6' },
  ];

  const handleDeviceClick = device => {
    setSelectedDevice(device);
  };

  return (
    <div className="device-list">
      <h2>Lista Urządzeń</h2>
      <div className="device-grid">
        {devices.map(device => (
          <div
            key={device.id}
            className="device-item"
            onClick={() => handleDeviceClick(device)}
          >
            <div className="device-name">{device.name}</div>
          </div>
        ))}
      </div>
      {selectedDevice && (
        <DeviceDetails
          device={selectedDevice}
          onClose={() => setSelectedDevice(null)}
          role={role}
        />
      )}
    </div>
  );
};

export default DeviceList;
