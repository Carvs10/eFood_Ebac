import Restaurant from "../Restaurant";
import { Container, List } from "./styles";

const Restaurants = () => {
  return (
    <Container>
      <List>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </List>
    </Container>
  );
};

export default Restaurants;
