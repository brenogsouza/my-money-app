import React from "react";

// CUSTOM COMPONENTS
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Messages from "../common/msg/messages";

const App = props => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">{props.children}</div>
      <Footer />
      <Messages />
    </div>
  );
};
export default App;
