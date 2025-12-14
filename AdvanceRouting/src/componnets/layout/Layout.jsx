import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from "react-router-dom"
function Layout() {
  return (
    <>
    {navigation.state === "Loading" && <p>Loading...</p>}
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
