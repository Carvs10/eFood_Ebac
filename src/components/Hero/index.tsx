import { Banner, Title } from "./styles";
import logo from "../../assets/logo.svg";
const Hero = () => {
  return (
    <Banner>
      <img src={logo} alt="" />
      <Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Title>
    </Banner>
  );
};

export default Hero;
