import { Card, Header, Info, Infos } from "./styles";
import restaurantPicture from "../../assets/imagem.png";
import star from "../../assets/estrela.svg";
import { Button, Tag } from "../../styles";

const Restaurant = () => {
  return (
    <Card>
      <Infos>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
      </Infos>
      <img src={restaurantPicture} alt="" />

      <Info>
        <Header>
          <h4>Nome do restautrante</h4>
          <div>
            <p>4.6</p>
            <img src={star} alt="" />
          </div>
        </Header>

        <p className="description">
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>
        <Button>Saiba Mais</Button>
      </Info>
    </Card>
  );
};

export default Restaurant;
