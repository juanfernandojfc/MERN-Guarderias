import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/private/Dashboard';
import NotFound from '../pages/NotFound'
import Escuela from '../Components/Escuela';
import Escuelas from '../Components/Escuelas';
import Map from '../Components/Map';

const AuthRouter = () => {

  const apiMapKey = 'AIzaSyB6Rc-TyEVGaYjz8JzHOk_NfoFMeTGORyc'
  const apiMapURL = `https://maps.googleapis.com/maps/api/js=v=3.exp&key=${apiMapKey}`
  return (
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}>
        <Route index element={<Escuela />}></Route>
        <Route path='/escuelas' element={<Escuelas />}></Route>
        <Route path='/map' element={
          <Map ></Map>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default AuthRouter;