import React from "react";
import Menu from "./menu";

const Sidebar = props => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <Menu />
      </section>
    </aside>
  );
};
export default Sidebar;
