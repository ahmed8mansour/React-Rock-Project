import React from "react"
import ReactDom from "react-dom"
import "./css/style.css"
import "./fontawesome-free-6.6.0-web/css/all.min.css"
import "./bootstrap files/css/bootstrap.css"
import "./bootstrap files/js/bootstrap.bundle.js"

import App from "./app.js"

ReactDom.render(
   <App/>
    , 
    document.getElementById("root")
)

