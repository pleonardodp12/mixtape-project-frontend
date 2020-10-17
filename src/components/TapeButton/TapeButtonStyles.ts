import styled from 'styled-components';

const primaryColor = '#3b3030';
const secondaryColor = '#f07c7c';
const inactiveIcon = '#655F5F';
const inactiveButton = '#242424';

export const StyledButton = styled.button`
  margin: 5%;
  border-radius: 5px;
  border: none;
  height: 50%;
  width: 50%;

  &.active {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }
  &.inactive {
    background-color: ${inactiveButton};
    color: ${inactiveIcon};
  }
`;
