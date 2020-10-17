import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 5%;
  border-radius: 5px;
  border: none;
  height: 50%;
  width: 50%;

  &.active {
    background-color: var(--primaryColor);
    color: var(--secondaryColor);
  }
  
  &.inactive {
    background-color: var(--inactiveButton);
    color: var(--inactiveIcon);
  }
`;
