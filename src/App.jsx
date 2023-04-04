import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      {/* navbar */}
      <NavBar></NavBar>
      <Outlet/>
      {/* footer */}
    </div>
  );
};

export default App;