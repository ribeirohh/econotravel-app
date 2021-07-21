// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import {ExperiencePanel} from './components/ExperiencePanel'
import {App} from "./components/app";

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app")
)