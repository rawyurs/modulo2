import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './ex3/app/store'; // Importa o store do Redux Toolkit
import Navbar from './Navbar';
import App from './ex1/App';
import App2 from './ex2/App2';
import App3 from './ex3/App3';
import App4 from './ex4/App4';

const AppRoute = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ex1" element={<App />} />
        <Route path="/ex2" element={<App2 />} />
        <Route path="/ex3" element={<App3 />} />
        <Route path="/ex4" element={<App4 />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);

export default AppRoute;
