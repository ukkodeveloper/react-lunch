import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

html,
body {
  font-family: sans-serif;
  font-size: 16px;
}

/* Colors *****************************************/
:root {
  --primary-color: #ec4a0a;
  --lighten-color: #f6a88a;
  --grey-100: #ffffff;
  --grey-200: #d0d5dd;
  --grey-300: #667085;
  --grey-400: #344054;
  --grey-500: #000000;
}

/* Typography *************************************/
.text-title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
}

.text-subtitle {
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
}

.text-body {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}

.text-caption {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}


`;