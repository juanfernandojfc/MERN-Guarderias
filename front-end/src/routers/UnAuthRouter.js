import React from 'react'
import {Route, Routes} from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Auth from '../pages/public/Auth'
import Home from '../pages/public/Home'
import TestPage from "../pages/public/TestPage";


const UnAuthRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Auth' element={<Auth></Auth>}></Route>
        <Route path='/test' element={<TestPage></TestPage>}></Route>

        <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default UnAuthRouter;