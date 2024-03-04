import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  background-color: ${colors.secondaryBackground};

  color: ${colors.textColor};
  width: 100%;
  align-items: center;
  text-align: center;

  padding: 40px 0;
  img {
    margin-bottom: 32.5px;
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 80px;
`;

export const Item = styled.a`
  img {
    margin: 0;
    width: 30px;
    height: 30px;
  }
`;

export const Description = styled.p`
  text-align: center;
  align-self: center;
`;
