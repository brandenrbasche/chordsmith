import React, { Component } from 'react';
import { createRoot } from 'react-dom';
import HomeContainer from './containers/HomeContainer.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<HomeContainer></HomeContainer>);
// root.render(<App />)
