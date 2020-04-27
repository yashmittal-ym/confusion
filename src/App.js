import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
    return ( <
        div >
        <
        Navbar dark color = "secondary" >
        <
        div className = "container" >
        <
        NavbarBrand href = "/" > hello! < /NavbarBrand> <
        /div> <
        /Navbar> <
        Menu / >
        <
        /div>
    );
}

export default App;