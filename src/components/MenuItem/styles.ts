import styled from "styled-components";
import { colors } from "../../styles";

export const CardItem = styled.div`
  display: block;
  background-color: ${colors.textColor};
  padding: 8px;
  color: ${colors.secondaryBackground};

  max-width: 320px;
  

  img {
    display: block;
    width: 100%
    object-fit: contain;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px;
`;

export const ItemDetails = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`;

export const ItemButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${colors.secondaryBackground};
  color: ${colors.textColor};
  font-weight: 700;
  font-size: 14px;
  padding: 4px;
`;
