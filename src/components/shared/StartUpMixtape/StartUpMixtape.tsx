import React from 'react';
import { TapeWrapper, Pregos, TapeContent, LabelName, ContentMiddle, Track, DetailsBottom, PregosDetails } from './StartUpMixtape';

const Tape = () => {
  return (
    <TapeWrapper>
      <Pregos />
      <Pregos />
      <Pregos />
      <Pregos />

      <TapeContent>
        <LabelName>
        </LabelName>

        <ContentMiddle>
          <Track />
          <Track />
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