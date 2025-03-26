import React, { Suspense } from 'react';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';
import Sidebar from '../component/SideBar/sidebar';

import './css/base.css';
// 🤫 🧏

const BasePage = ({ children , toggleHeader, toggleSidebar, toggleFooter}) => {
  return (
    <>
      {toggleHeader && <Header/>}
      {toggleSidebar && <Sidebar />}
      <Suspense fallback={<div>Loading... </div>}>

        <main className="main-content" style={{
          paddingLeft: ((toggleSidebar))? '75px' : '0px'
        }}>
            {children}
            {toggleFooter && <Footer/>}
        </main>

      </Suspense> 
    </>
  );
};

export default BasePage;