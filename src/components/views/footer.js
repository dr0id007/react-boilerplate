import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <NavLink to="/"> domain_url.com</NavLink>
        </div>
      </footer>
    );
  }
}
