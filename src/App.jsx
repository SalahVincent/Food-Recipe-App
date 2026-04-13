import { useState } from 'react'
import './styles/App.css'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/favorites' element={<Favorites />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
