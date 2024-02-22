import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Home({ started, setStarted, setResetLink, setResetLinkClass }) {

  const onClick = () => {
    setStarted(!started);
    setResetLink('Start over');
    setResetLinkClass('enabled');
  };

  return (
    <div className="container">
      <div className='hero-container'>
        <h1>Choose your own adventure.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloribus debitis dolore, quibusdam architecto atque at alias natus unde, commodi corporis ut quas similique eos velit. Incidunt excepturi enim quidem!</p>
        <motion.a
          whileHover= {{scale: 1.1}}
          transition={{type: 'spring', stiffness: 400, damping: 10}}
        >
          <a className='get-started-btn' onClick={onClick}>Get Started</a>
        </motion.a>
      </div>
    </div>
  );
}

export default Home;