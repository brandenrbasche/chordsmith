import React, { Component } from 'react';
import { render, createRoot } from 'react-dom';
// import Home from './components/Home.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
// import App from 'App';

const root = createRoot(document.getElementById('root'));
root.render(<HomeContainer></HomeContainer>);
