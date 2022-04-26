import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { LoginPage } from '../Page/LoginPage';
import { UsePage } from '../Page/UsePage';

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/User" element={<UsePage/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
