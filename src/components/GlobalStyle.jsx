import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family:${({theme})=> theme.fonts.main };
    font-size:${({theme})=> theme.fontSizes.base};

  }
`

export default GlobalStyle