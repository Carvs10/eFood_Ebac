import styled from "styled-components";
import { Tag, colors } from "../../styles";

export const Card = styled.div`
  width: 472px;
  background: "#FFFFFF";
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${colors.textColor};
  border-top: 0;

  height: 100%;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const Info = styled.div`
  padding: 8px;

  .description {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${Tag} {
    margin-left: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 16px;

  h2,
  p {
    font-weight: 700;
  }

  div {
    p {
      margin: 0;
    }

    display: inline-flex;

    align-items: end;
    justify-items: center;

    img {
      width: 21px;
      height: 21px;
      margin-left: 8px;
    }
  }
`;
