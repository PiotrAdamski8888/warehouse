import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeviceList from '../components/DeviceList';
import OrderList from '../components/OrderList';

const Dashboard = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [showDevices, setShowDevices] = useState(role !== 'kierownik');

  const handleLogout = () => {
    navigate('/');
  };

  const toggleView = () => {
    setShowDevices(!showDevices);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <span className="role-display">Rola: {role}</span>
        <div className="header-right">
          {(role === 'kierownik' || role === 'koordynator') && (
            <button onClick={toggleView}>
              {showDevices ? 'Pokaż zamówienia' : 'Pokaż urządzenia'}
            </button>
          )}
          <button onClick={handleLogout} className="logout-button">
            Wyloguj
          </button>
        </div>
      </div>
      <div className="content">
        {role === 'technik' && <DeviceList role={role} />}
        {(role === 'kierownik' || role === 'koordynator') && (
          <>{showDevices ? <DeviceList role={role} /> : <OrderList />}</>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
