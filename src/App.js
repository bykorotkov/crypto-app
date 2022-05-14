import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <HashRouter>
       <Navbar />
       <AppRouter />
    </HashRouter>

  ) 
}

export default App;
