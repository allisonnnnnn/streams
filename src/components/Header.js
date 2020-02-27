import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/">Streamer</Link>
      <div className="right menu">
        <Link to="/">Broadcasting streams</Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
