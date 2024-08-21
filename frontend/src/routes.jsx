import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';

const AppRoutes = () => {
  return (
        <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="signin" element={<SignInPage/>} />
        </Routes>
  )
}

export default AppRoutes