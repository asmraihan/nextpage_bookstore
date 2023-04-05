import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* navbar */}
      <NavBar></NavBar>
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet/>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;