import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/createAccount" element={<Signup />}/>
      <Route path="/app" element={<App />}/>
    </Routes>
</BrowserRouter>
);

