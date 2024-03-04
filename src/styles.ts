import { createGlobalStyle, styled } from "styled-components";

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
    background-color: ${colors.mainBackground};
    color: ${colors.textColor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

`;
export const Button = styled.button`
  background-color: ${colors.textColor};
  color: ${colors.secondaryBackground};
  padding: 4px 6px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export const Tag = styled.button`
  background-color: ${colors.textColor};
  color: ${colors.secondaryBackground};
  padding: 6px 4px;
  border: none;
  font-weight: 700;
  font-size: 12px;
`;
