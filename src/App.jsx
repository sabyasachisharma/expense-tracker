import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Wrapper from './pages/Wrapper'
import AllTransactions from './pages/AllTransactions'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
          <Wrapper>
            <Dashboard />
          </Wrapper>
          } />
          <Route path="/transactions" element={<AllTransactions />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
