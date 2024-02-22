import React, { useState } from 'react';
import HomeContainer from './containers/HomeContainer.jsx';
import GenerateContainer from './containers/GenerateContainer.jsx';

const App = () => {
  // const [started, setStarted] = useState(false);
  // console.log('logging initial started: ', started);

  return (
    <>
    <div id="root">
      <HomeContainer />
      /* !started ? {
        <HomeContainer started="started" setStarted={setStarted} />
      } : {
        <GenerateContainer />
      }
    </div> */
    </>
  );
}

export default App;