import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";


class Button extends React.Component{
    render(){
        return(
            <MDBBtn onClick={this.props.click} color="mdb-color">{this.props.children}</MDBBtn>
        )
    }
}

export default Button