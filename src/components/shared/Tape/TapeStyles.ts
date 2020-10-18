import styled from 'styled-components';

export const TapeWrapper = styled.div`
  width: 200px;
  height: 120px;
  background-color: #C0B2B6;
  position: relative;
  border-radius: 4px;
`;

export const Pregos = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  position: absolute;
  display: flex;      
  justify-content: center;
  background-color: #000;
  

  &:nth-child(1){
    top: 5px;
    left: 5px;
  }
  
  &:nth-child(2){
    bottom: 5px;
    left: 5px;
  }
  
  &:nth-child(3){
    bottom: 5px;
    right: 5px;
  }
  
  &:nth-child(4){
    top: 5px;
    right: 5px;
  }
`;


export const TapeContent = styled.div`
  background-color: #fff;
  width: 160px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 12px;
  left: 20px;
`;

export const LabelName = styled.div`
  background-color: #f8f8f8;
  width: auto;
  display: flex;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  align-items: center;
  font-family: 'Shadows Into Light', cursive;
  padding:0 8px;
  opacity: .6;
`;

export const ContentMiddle = styled.div`
  background-color: #C4C4C4;
  border-radius: 12px;
  width: 60%;
  height: 26px;
  align-self: center;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;

export const Track = styled.div`
  width: 20px;
  height: 20px;
  background-color: #A19D9D;
  border-radius: 50%;
`;

export const DetailsBottom = styled.div`
  position: relative;
  margin: 0 auto;
  bottom: -17px;
  width: 120px;
  height: 22px;
  background-color: #9E9396;
  border: .1px solid #4E4346dd;
  transform: perspective(4px) rotateX(1deg);
  box-shadow: 0 -1px 4px 0 rgba(0,0,0, .4);
`;


export const PregosDetails = styled.span`
  
  height: 8px;
  width: 8px;
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  background-color: #000;
  z-index: 1;

  &:nth-child(1){
    bottom: 5px;
    left: 20px;
  }
  
  &:nth-child(2){
    bottom: 5px;
    right: 20px;
  }
`;