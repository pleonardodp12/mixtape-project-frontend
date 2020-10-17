import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  button,
  input {
    outline: 0;
  }
  button {
    cursor: pointer;
  }
`;