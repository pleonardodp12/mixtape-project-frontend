import styled from 'styled-components';

const primaryColor = '#3b3030';
const secondaryColor = '#f07c7c';
const inactiveIcon = '#655F5F';
const inactiveButton = '#242424';

export const StyledButton = styled.button`
  margin: 5%;
  border-radius: 5px;
  border: none;
  width: 300px;
  height: 300px;

  top: 0%;
  bottom: 11.76%;

  background: #3b3030;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3),
    inset 0px 0px 2px 2px rgba(0, 0, 0, 0.2);

  &.active {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }
  &.inactive {
    background-color: ${inactiveButton};
    color: ${inactiveIcon};
  }

  svg {
    width: 10em;
    height: 10em;
  }
  
  }
`;
