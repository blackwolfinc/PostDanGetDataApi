import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { LoginPage } from '../Page/LoginPage';
import { Register } from '../Page/Register';
import { UsePage } from '../Page/UsePage';

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/User" element={<UsePage/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
