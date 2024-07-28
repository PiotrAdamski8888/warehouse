import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeviceList from "../components/DeviceList";
import OrderList from "../components/OrderList";

const Dashboard = () => {
  const { role } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <span className="role-display">Rola: {role}</span>
          <button className="logout-button" onClick={handleLogout}>
            Wyloguj
          </button>
        </div>
        <div className="content">
          {(role === "technik" || role === "koordynator") && (
            <DeviceList role={role} />
          )}
          {role === "kierownik" && <OrderList />}
        </div>
      </div>
      // <div className="dashboard">
      //   <div className="dashboard-header">
      //     {/* <h1>Dashboard</h1> */}
      //     <div className="header-right">
      //       <span className="role-display">Rola: {role}</span>
      //       <button onClick={handleLogout}>Wyloguj</button>
      //     </div>
      //   </div>
      //   <div className="content">
      //     {(role === "technik" || role === "koordynator") && (
      //       <DeviceList role={role} />
      //     )}
      //     {role === "kierownik" && <OrderList />}
      //   </div>
      // </div>
    );
};

export default Dashboard;
