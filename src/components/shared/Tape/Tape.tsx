import React from 'react';
import { TapeWrapper, Pregos, TapeContent, LabelName, ContentMiddle, Track, DetailsBottom, PregosDetails } from './TapeStyles';

interface Props {
  active: boolean,
}

interface DataTape {
  name: string,
  color: string,
  image: string,
}


const Tape = ({ active }: Props) => {
  
  return (
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
            <Track className={active ? 'active': 'inactive'}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Track>

            <Track className={active ? 'active': 'inactive'}>
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
  );
}

export default Tape;