import { createGlobalStyle } from 'styled-components';
import { CSS_RESET } from './reset';

export const GlobalStyles = createGlobalStyle`
  ${CSS_RESET}

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --vh100: 100vh;
  }

  html,
  body {
    overscroll-behavior-y: none;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Inter', sans-serif;
    width: 100%;
  }

  .sb-show-main.sb-main-padded {
    margin: 0;
    padding: 0;
  }
`;
