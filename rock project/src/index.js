import React from "react"
import ReactDom from "react-dom"

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css"

import "./css/style.css"

import App from "./app.js"

ReactDom.render(
   <App/>
    , 
    document.getElementById("root")
)

