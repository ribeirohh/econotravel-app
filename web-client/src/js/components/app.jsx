import * as React from "react";
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Inicio} from "./inicio";
import {QuienesSomos} from "./quienes-somos";

export const App = () => {

    return <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/Inicio">
                <Inicio />
            </Route>
            <Router path="/Quienes Somos">
                <QuienesSomos />
            </Router>
            <Router path="/Experiencias">
                <Experiencias />
            </Router>

        </Switch>

        </Router>
}