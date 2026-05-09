import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./parts/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./parts/Sidebar";

const AppLayout = () => {
  const isAuthenticated = true;
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <main>
        <Outlet context={{setIsSidebarOpen}}/>
      </main>
    </div>
  );
};

export default AppLayout
