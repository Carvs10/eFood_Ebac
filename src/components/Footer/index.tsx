import logo from "../../assets/logo.svg";
import instagramLogo from "../../assets/instagram-round.svg";
import facebookLogo from "../../assets/facebook-round.svg";
import twitterLogo from "../../assets/twitter-2.svg";

import { Container, Description, Item, SocialMedia } from "./styles";

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <SocialMedia>
        <li>
          <Item href="/">
            <img src={instagramLogo} alt="" />
          </Item>
        </li>
        <li>
          <Item href="/">
            <img src={facebookLogo} alt="" />
          </Item>
        </li>
        <li>
          <Item href="/">
            <img src={twitterLogo} alt="" />
          </Item>
        </li>
      </SocialMedia>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Description>
    </Container>
  );
};

export default Footer;
