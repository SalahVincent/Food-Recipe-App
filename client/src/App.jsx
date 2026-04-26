import { useState } from "react";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Navbar from "./components/layout/parts/Navbar";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import RecipeForm from "./pages/RecipeForm";
import Footer from "./components/layout/parts/Footer";
import Sidebar from "./components/layout/parts/Sidebar";
import LandingPage from "./pages/LandingPage";
import PublicLayout from './components/layout/PublicLayout'
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Feed from "./pages/Feed";
import NotificationsPage from "./pages/NotificationsPage";
import Profile from "./pages/Profile";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route element={<PublicLayout/>}>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Route>

      <Route element={<AppLayout/>}>
        <Route path="/feed" element={<Feed/>} />
        <Route path="/add-recipe" element={<RecipeForm/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/notifications" element={<NotificationsPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

        <Route path="/profile/:userId" element={<Profile/>} />

      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
};

export default App;
