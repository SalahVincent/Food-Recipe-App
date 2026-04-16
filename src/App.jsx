import { useState } from 'react'
import './styles/App.css'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'
import RecipeForm from './pages/RecipeForm'
import Footer from './components/layout/Footer'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/add' element={<RecipeForm />} /> 
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
