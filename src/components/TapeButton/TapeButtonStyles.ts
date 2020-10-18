import styled from 'styled-components';

const primaryColor = '#3b3030';
const secondaryColor = '#f07c7c';
const inactiveIcon = '#655F5F';
const inactiveButton = '#242424';

// export const StyledContainer = styled.div`
// `;

export const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  width: 2rem;
  height: 2rem;
  z-index: 1;
  position: relative;
  transition: 0.4s all ease-in-out;

  background: #3b3030;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3),
    inset 0px 0px 2px 2px rgba(0, 0, 0, 0.2);

  &.active {
    background-color: ${primaryColor};
    color: ${secondaryColor};
    transform: scale(0.98);
    top: 2.5px;
  }

  &.inactive {
    background-color: ${primaryColor};
    color: ${inactiveIcon};
    transform: scale(1);
    top: 0px;
  }
  svg {
    width: 1em;
    height: 1em;
  }
  }
`;
export const StyledBackground = styled.div`
  background-color: ${inactiveButton};
  width: 1.8rem;
  height: 2rem;
  border-radius: 5px;
  position: relative;
  bottom: 1.65rem;
  left: 0.1rem;
  z-index: -1;
`;
