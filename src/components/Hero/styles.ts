import styled from "styled-components";
import { colors } from "../../styles";
import bannerBG from "../../assets/fundo.svg";

export const Banner = styled.div`
  background-color: ${colors.secondaryBackground};
  background-image: url(${bannerBG});
  color: ${colors.textColor};
  width: 100%;
  align-items: center;
  text-align: center;
  height: 384px;

  img {
    margin-top: 32px;
    margin-bottom: 140px;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42.19px;
`;
