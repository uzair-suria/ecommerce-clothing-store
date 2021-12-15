import React from "react";
import Directory from "../../components/Directory/Directory";

import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Fashion Thrift Online Store!</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
