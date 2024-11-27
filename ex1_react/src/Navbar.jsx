// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";




const Navbar = () => (
    <nav className='navbar2'>
        <ul>
            <li><Link to="/ex1">Exercício 1</Link></li>
            <li><Link to="/ex2">Exercício 2</Link></li>
            <li><Link to="/ex3">ATM</Link></li>
            <li><Link to="/ex4">Exercício 4</Link></li>
            <li><Link to="/ex5">Exercício 5</Link></li>
            <li><Link to="/ex6">Teste</Link></li>
        </ul>
    </nav>
);

export default Navbar;


