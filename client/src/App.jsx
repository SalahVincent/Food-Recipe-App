import { useState } from 'react'
import './styles/App.css'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import RecipeForm from './pages/RecipeForm'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
import LandingPage from './pages/LandingPage'

const App = () => {
  const location = useLocation()

  return (
    <>
    <LandingPage/>
        <Navbar />
        {location.pathname === '/' && <Sidebar />}
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/add' element={<RecipeForm />} /> 
          </Routes>
        <Footer />
    </>
  )
}

export default App
