import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Main';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
