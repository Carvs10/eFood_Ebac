import { CardItem, ItemButton, ItemDetails, ItemTitle } from "./styles";
import itemPic from "../../assets/image 3.png";

const MenuItem = () => {
  return (
    <CardItem>
      <img src={itemPic} alt="" />

      <ItemTitle>Pizza Margerita</ItemTitle>
      <ItemDetails>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </ItemDetails>

      <ItemButton>Adicionar ao carrinho</ItemButton>
    </CardItem>
  );
};

export default MenuItem;
