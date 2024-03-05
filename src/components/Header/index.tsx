import { HeaderBar, RedirectHome } from "./styles";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <HeaderBar>
      <RedirectHome to={`/`}>Restaurantes</RedirectHome>
      <img src={logo} alt="" />
      <p>0 produto(s) no carrinho</p>
    </HeaderBar>
  );
};

export default Header;
