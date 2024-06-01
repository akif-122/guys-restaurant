import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App