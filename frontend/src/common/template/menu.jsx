import React from "react";

//CUSTOM COMPONENT
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

const Menu = props => {
  return (
    <ul className="sidebar-menu">
      <MenuItem path="/" label="Dashboard" icon="dashboad" />
      <MenuTree label="Cadastro" icon="edit">
        <MenuItem path="billingCycles" label="Ciclos de Pagamento" icon="usd" />
      </MenuTree>
    </ul>
  );
};
export default Menu;
