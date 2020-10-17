import React from 'react';
import Tape from './components/Tape/Tape';
import TapeButton from './components/TapeButton/TapeButton';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Tape />
      <TapeButton type='play'/>
    </>
  );
}

export default App;
