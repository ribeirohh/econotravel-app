import * as React from "react";
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {QuienesSomos} from "./quienes-somos";
import { Experiencias} from "./experiencias";
import {Inicio} from "./inicio";

export const App = () => {

    return <Router>
        <NavigationBar />
        <Switch>
            <Route path={"/inicio"}>
                <Inicio />
            </Route>

            <Route path={"/quienes-somos"}>
                <QuienesSomos />
            </Route>

            <Route path={"/experiencias"}>
                <Experiencias />
            </Route>

        </Switch>
    </Router>
}