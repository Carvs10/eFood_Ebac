import styled from "styled-components";

export const MenuGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 32px;
  padding: 0;
  justify-items: center;
  justify-content: center;
  margin-top: 56px;
  margin-bottom: 120px;

  li {
    display: block;
    max-width: 320px;
  }
`;
