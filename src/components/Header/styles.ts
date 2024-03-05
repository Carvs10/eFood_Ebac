import styled from "styled-components";
import { colors } from "../../styles";
import bannerBG from "../../assets/fundo.svg";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: ${colors.secondaryBackground};
  background-image: url(${bannerBG});
  align-items: center;
  height: 100%;
`;

export const RedirectHome = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.textColor};
`;
