import "../common/template/dependencies";
import React from "react";

// CUSTOM COMPONENTS
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";

const App = props => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
    </div>
  );
};
export default App;
