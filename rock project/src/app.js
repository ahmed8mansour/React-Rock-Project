import React from "react"

// comonents 
import Home from "./component/Home"
import About from "./component/About"
import Services from "./component/Services"
import Techno from "./component/Techno"
import HowTo from "./component/HowTo"
import Footer from "./component/Footer"
export default function App(){
    return(
        <div>
            <Home/>
            <About/>
            <Services/>
            <Techno/>
            <HowTo/>
            <Footer/>
        </div>

    )
}