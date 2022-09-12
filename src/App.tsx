import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Layout from './Layouts'
import './App.css'
import UserPage from 'src/Pages/user/index'
import ProductPage from '@product'
import { Layout } from 'antd'
import OrderPage from 'src/Pages/order/index'

type AppProps = {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/user" element={<UserPage />} />
        <Route key="home" path="*" element={<Navigate to="/" replace />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}
export default App
