import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";

class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
      <MDBNavbar color="unique-color-dark"  dark>
        <MDBNavbarBrand href="#">
          {this.props.title}
        </MDBNavbarBrand>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;