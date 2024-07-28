import React, { useState } from 'react';
import DeviceDetails from './DeviceDetails';

const DeviceList = ({ role }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const devices = [
    { id: 1, name: 'Canon C3530i II' },
    { id: 2, name: 'Canon C3530i I' },
    { id: 3, name: 'Canon 4525i' },
    { id: 4, name: 'KM 224e' },
    { id: 5, name: 'KM 364e' },
    { id: 6, name: 'KM c308' },
  ];

  const handleDeviceClick = device => {
    setSelectedDevice(device);
  };

  const filteredDevices = devices.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="device-list">
      <h2>Lista Urządzeń</h2>
      <input
        type="text"
        placeholder="Wyszukaj urządzenie"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="device-grid">
        {filteredDevices.map(device => (
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
