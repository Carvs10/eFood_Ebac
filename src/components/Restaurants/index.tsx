import Restaurant from "../Restaurant";
import { Container, List } from "./styles";
import restaurantPicture from "../../assets/imagem.png";
import italian from "../../assets/italian.png";

const places = [
  {
    name: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    rating: 4.9,
    infos: ["Destaque da semana", "Japonesa"],
    image: restaurantPicture,
  },
  {
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rating: 4.6,
    infos: ["Italiana"],
    image: italian,
  },
  {
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rating: 4.6,
    infos: ["Italiana"],
    image: italian,
  },
  {
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rating: 4.6,
    infos: ["Italiana"],
    image: italian,
  },
  {
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rating: 4.6,
    infos: ["Italiana"],
    image: italian,
  },
  {
    name: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rating: 4.6,
    infos: ["Italiana"],
    image: italian,
  },
];

const Restaurants = () => {
  return (
    <Container>
      <List>
        {places.map((item) => (
          <li key={item.name}>
            <Restaurant
              name={item.name}
              description={item.description}
              image={item.image}
              rating={item.rating}
              infos={item.infos}
            />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Restaurants;
