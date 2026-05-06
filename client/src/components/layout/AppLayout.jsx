import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Sidebar from "./parts/Sidebar";
import { useState } from "react";

const AppLayout = () => {
  const isAuthenticated = true;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Navbar onMenuClick={() => setIsSidebarOpen(true)}/>
      <main>
        <Outlet context={{ setIsSidebarOpen }}/>
      </main>
    </div>
  );
};

export default AppLayout
