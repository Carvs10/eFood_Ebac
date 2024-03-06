import MenuItem from "../MenuItem";
import { MenuGrid } from "./styles";

const Menu = () => {
  return (
    <div className="container">
      <MenuGrid>
        <li>
          <MenuItem />
        </li>
        <li>
          <MenuItem />
        </li>
        <li>
          <MenuItem />
        </li>
        <li>
          <MenuItem />
        </li>
        <li>
          <MenuItem />
        </li>
        <li>
          <MenuItem />
        </li>
      </MenuGrid>
    </div>
  );
};

export default Menu;
