import { createGlobalStyle } from "styled-components";

export const colors = {
  mainBackground: "#FFF8F2",
  textColor: "#E66767",
  secondaryBackground: "#FFEBD9",
};

export const GlobalStyles = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.mainBackground}
    color: ${colors.textColor}
  }

`;
