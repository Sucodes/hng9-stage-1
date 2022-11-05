import React from 'react';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='container'>    
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout;
