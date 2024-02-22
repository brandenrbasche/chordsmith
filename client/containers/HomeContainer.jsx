import React, { useState } from 'react';
import Navbar from '../components/global/Navbar.jsx';
import Home from '../components/Home.jsx';
import GenerateContainer from '../containers/GenerateContainer.jsx';

function HomeContainer() {
  const [started, setStarted] = useState(false);
  const [resetLink, setResetLink] = useState('Electronic melody generator.');
  const [resetLinkClass, setResetLinkClass] = useState('disabled');
  console.log('logging initial started: ', started);
    
  return (
    <div id="root">
      <Navbar 
        resetLink={resetLink} 
        resetLinkClass={resetLinkClass} 
        setResetLinkClass={setResetLinkClass} 
        setResetLink={setResetLink}
        started={started}
        setStarted={setStarted} />
      <div className='home-container-div'>
        {
          !started ? (
            <Home 
              started={started} 
              setStarted={setStarted} 
              setResetLink={setResetLink} 
              setResetLinkClass={setResetLinkClass}/>
          ) : (
            <GenerateContainer />
          )
        }
      </div>
    </div>
  );
}

export default HomeContainer;