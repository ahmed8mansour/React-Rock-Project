import React, { useRef } from "react";
import ComponentHeader from "./ComponentHeader";
import Card from "./Card";
import DataCard from "./DataCard";
export default function Services(){
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    console.log(windowDimensions)
    

    function tracking(){
        console.log("was clicked")
    }
    const CardDataelement = DataCard[0].map( function(element, index , arr){
     
        return ( 
            <div className="col-xxl-3 col-md-6 card_sizing">
                <Card
                
                image_src ={element.image_src}
                image_folder={element.image_folder}
                card_title = {element.title}
                card_text = {element.describtion}
                button_text={element.button_text}

                />
                </div>
        )
}
    )


console.log(CardDataelement[2])
    return(
        <div className="services_section my_section" id="Services">
            <div className="container">
                <ComponentHeader 
                title="why build"
                prevtitle="with hydra"
                para="
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque reiciendis accusantium laudantium voluptas molestias, omnis perspiciatis est alias labore autem?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque omnis perspiciatis est alias labore autem?
"
                />
            {
               windowDimensions.width  >=768 &&
            <div className="card_group row justify-content-center align-items-start">
                
                {CardDataelement}

            </div>
            }
            {
                windowDimensions.width  <=768 &&
                <div className="card_group row justify-content-center align-items-start">
            <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                            {  CardDataelement[0]}
                            </div>
                            <div class="carousel-item">
                            {  CardDataelement[1]}
                                
                            </div>
                            <div class="carousel-item">
                            {  CardDataelement[2]}

                            </div> 
                            <div class="carousel-item">
                            {  CardDataelement[3]}

                            </div>
                        </div>

                        <button class="carousel-control-prev prev_button" type="button" onClick={tracking} data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                        <span class="fas fa-arrow-left" ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next next_button" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                            <span class="fas fa-arrow-right" ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
            </div>
             </div>

            }
            </div>
        </div>
    )
}