import React, { useState } from 'react';
import { TapeWrapper, Pregos, TapeContent, LabelName, ContentMiddle, Track, DetailsBottom, PregosDetails } from './TapeStyles';

interface Style {
  name: string,
  primaryColor: string,
  image: string;
}

interface Props {
  typeAjudaDeus: boolean,
}

const Tape: React.FC<Props> = ({ typeAjudaDeus }: Props)=> {
  const [ play, setPlay ] = useState(false);

  const playMusic = () => {
    setPlay(true);
    if(!play){
      return `100% { transform: rotateZ(360deg); }`
    }
    console.log(play)
    return `0% { transform: rotateZ(0deg); }`
  }

  return (
    <>
      <div>
        <button onClick={playMusic}>Play</button>
      </div>
      <TapeWrapper>
        <Pregos />
        <Pregos />
        <Pregos />
        <Pregos />

        <TapeContent>
          <LabelName>
            Oasis
          </LabelName>

          <ContentMiddle>
            <Track>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Track>

            <Track>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Track>
          </ContentMiddle>
        </TapeContent>
        
        <DetailsBottom>
          <PregosDetails />
          <PregosDetails />
        </DetailsBottom>
        
      </TapeWrapper>
    </>
  );
}

export default Tape;