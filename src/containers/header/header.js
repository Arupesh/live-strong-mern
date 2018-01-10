import React from 'react';
import logo from '../../logo.svg';
import './header.css'; 
export const Header = () =>{
	return (
		
		<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="header-title">Welcome to Grid CSS SPA</h1>
          </header>
		
		)
} 