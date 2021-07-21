// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

<<<<<<< HEAD

=======
import {ExperiencePanel} from './components/ExperiencePanel'
>>>>>>> 6a97c33de40a263a8886a4df24166940fcdaa0cc
import {App} from "./components/app";

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app")
)