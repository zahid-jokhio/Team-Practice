import React from "react";
import {
    BrowserRouter as Router,
    Route,

} from "react-router-dom";

import { Login, Signup, Todo } from '../../Containers'

export default function BasicExample() {
    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={Todo} />
        </Router>
    );
}
