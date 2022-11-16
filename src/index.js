import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import TableEmploye from './pages/TableEmploye'
import Error from './components/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<TableEmploye />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
