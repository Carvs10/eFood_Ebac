import styled from "styled-components";
import { colors } from "../../styles";

export const Banner = styled.div`
  height: 100%;
  position: relative;
  color: ${colors.white};

  img {
    width: 100%;
  }

  h2,
  h3 {
    position: absolute;
    left: 170px;
    font-size: 32px;
    line-height: 37.5px;
  }
`;

export const Category = styled.h3`
  font-weight: 100;
  top: 25px;
`;

export const Title = styled.h2`
  bottom: 32px;
  font-weight: 900;
`;
