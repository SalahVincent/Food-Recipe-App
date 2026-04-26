import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./parts/Navbar";

const AppLayout = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout
