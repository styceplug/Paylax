import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StartTransactionPage from './pages/StartTransactionPage';
import BitcoinPaymentPage from './pages/BitcoinPaymentPage';

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/contact-us' element={<ContactUsPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/start' element={<StartTransactionPage />} />
      <Route path='/bitcoin-payment' element={<BitcoinPaymentPage />} />
   </Route>
   )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

