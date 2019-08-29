import React from "react";

// CUSTOM COMPONENTS
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Routes from "./routes";
import Messages from "../common/msg/messages";

const App = props => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
      <Messages />
    </div>
  );
};
export default App;
