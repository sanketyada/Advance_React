import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({childern}) {
  return (
    <div>
      <Navbar/>
      <main>{childern}</main>
      <Footer/>
    </div>
  )
}

export default Layout
