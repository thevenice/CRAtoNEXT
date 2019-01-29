import React from "react";
import PropTypes from "prop-types";
import { Link } from "next/link";
import { GlobalStyle } from "../../GlobalStyle";
import {
  NavTop,
  NavMain,
  Nav1,
  Nav2,
  NavHide,
  NavHideOn,
  DarkLord
} from "./NavbarStyled";
// import { Consumer } from "../../context";

const Navbar = props => {
  const navhidefun = (x, y) => {
    return (
      <div>
        <a href={x} onClick={_ => value.onNavToggle()}>
          {y}
        </a>
      </div>
    );
  };
  return (
    <NavTop>
      <GlobalStyle />
      <NavMain className="navbar">
        {/* FIRST NAV CHILD  */}
        <Nav1>
          {/** */}
          <p>DEVPAGE</p>
        </Nav1>

        {/* SECOND NAV CHILD  */}
        <Nav2 className="nav2">
          <button className="nav2A" onClick={_ => props.value.onNavToggle()}>
            =
          </button>
        </Nav2>
      </NavMain>
      <NavHideOn>
        <NavHide
          className={!props.value.state.navToggle ? "hidden" : "notHidden"}
        >
          {navhidefun("/", "Home")}
          {navhidefun("/people", "People")}
          {navhidefun("/signup", "Signup")}
          {navhidefun("/dashboard", "Account")}
          <div>
            {" "}
            <DarkLord onClick={_ => props.value.onDark()}>
              {!props.value.state.highlight ? "Light" : "Dark"}
            </DarkLord>
          </div>
        </NavHide>
      </NavHideOn>
    </NavTop>
  );
};

Navbar.deafultProps = {
  brand: "TITLE HERE"
};

Navbar.propTypes = {
  // brand: PropTypes.string.isRequired
};
export default Navbar;
