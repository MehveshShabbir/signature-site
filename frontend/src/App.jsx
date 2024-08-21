import React from 'react'
import './App.css';
import AppRoutes from './routes';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-content">
          <AppRoutes />
      </div>
      <Footer/>
  </div>
  );
}

export default App;
