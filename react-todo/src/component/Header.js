import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header(){
    return(
        
        <header>
            <h1><Link to="/home">My WebSite </Link></h1>
            
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/board">board</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/todo">할 일 목록</Link></li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;