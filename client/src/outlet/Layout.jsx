import React from 'react'
import NavBar from '../components/NavBar'
import BookingModal from '../components/BookingModal'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'

const Layout = () => {
  return (
   <>
   
   <NavBar />
   <Outlet />
   <Footer />
   <BookingModal />
   <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
   </>
  )
}

export default Layout;
