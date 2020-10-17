import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primaryColor: #3b3030;
    --secondaryColor: #f07c7c;
    --inactiveIcon: #655F5F;
    --inactiveButton: #242424;
  }

  body {
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button,
  input {
    outline: 0;
  }
  
  button {
    cursor: pointer;
  }
`;