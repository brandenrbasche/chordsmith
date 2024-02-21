import React, { Component } from 'react';
import { render, createRoot } from 'react-dom';
import Home from './components/Home.jsx';
// import App from 'App';

const root = createRoot(document.getElementById('root'));
root.render(<Home></Home>);
