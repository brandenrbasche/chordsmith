import React, { Component } from 'react';
import { render, createRoot } from 'react-dom';
// import Home from '../client/components/Home';
// import App from 'App';

// Clear existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<Home></Home>);
// render(
//     <App />,
//     document.getElementById('app')
// );