import styled from 'styled-components';

export const InputContent = styled.div`
  position: relative;
  margin-top: 1.4rem;

  input {
  width: 100%;
  height: 5rem;
  margin-top: 0.8rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid #555561;
  outline: none;
  padding: 0 2.8rem;
  font-size: 1.6rem;
  color: #555561;
  transition: .5s;
  &:focus {
    border-bottom: 3px solid var(--secondaryColor);
  }
  }
  svg {
    width: 32px;
    height: 32px;
    position: absolute;
    display: inline-block;
    bottom: 2rem;
    color: #555561;
  }
`;