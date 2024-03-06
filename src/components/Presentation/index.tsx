import { Banner, Category, Title } from "./styles";
import bannerImg from "../../assets/imagem_fundo.png";

const Presentation = () => {
  return (
    <Banner>
      <img src={bannerImg} alt="" />
      <Category>Italiana</Category>
      <Title>La Dolce Vita Trattoria</Title>
    </Banner>
  );
};

export default Presentation;
