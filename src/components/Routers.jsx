import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

const Routers = () => {
  return (

    <Routes>
      <Route path='/*' element={<Dashboard />}></Route>
      <Route path='/customers' element={<Customers />}></Route>
    </Routes>

  )
}

export default Routers