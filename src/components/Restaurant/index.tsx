import { Card, Header, Info, Infos } from "./styles";
import star from "../../assets/estrela.svg";
import { Button, Tag } from "../../styles";

type Props = {
  name: string;
  description: string;
  rating: number;
  infos: string[];
  image: string;
};

const Restaurant = ({ name, description, image, rating, infos }: Props) => {
  return (
    <Card>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <img src={image} alt={name} />

      <Info>
        <Header>
          <h4>{name}</h4>
          <div>
            <p>{rating}</p>
            <img src={star} alt="" />
          </div>
        </Header>

        <p className="description">{description}</p>
        <Button to={`/restaurant/`}>Saiba Mais</Button>
      </Info>
    </Card>
  );
};

export default Restaurant;
