import React, {useState} from 'react';
import Tape from './components/shared/Tape/Tape';
import TapeButton from './components/shared/TapeButton/TapeButton';
import GlobalStyles from './styles/global';

function App() {
  const [playMusic, setPlayMusic] = useState(false);

  const play = () => {
    setPlayMusic(true)
    //isso é só um teste
  }
  return (
    <>
      <GlobalStyles />
      <button onClick={play}>play</button>
      <TapeButton type='play'/>
      <Tape active={playMusic}/>
    </>
  );
}

export default App;
