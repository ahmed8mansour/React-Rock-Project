import React, { useRef } from "react";

export default function Techno(){
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
    
    return(
        <div className="techno_section my_section" id="Techno">
            <div className="container">
                <div className="techno_content text-center ">
                
                <h1>technolgies & Hardware</h1>
                <p>used by hydra vr.</p>
             {windowDimensions.width  >= 768 &&
               <span class="fas fa-arrow-down navbar_toggler arrow_rock" style={{marginLeft:"30px", fontSize:"20px"}}></span> 
}
                </div>
               {
                windowDimensions.width >=768 &&
                <div className="row justify-content-center imaegs_paernt">

            <div className="images_area row align-items-center justify-content-between">
                <img className="techno_img col-3" src="images/technologies/Hydra-Tech1 1.png"/>
                <img className="techno_img col-3" src="images/technologies/Hydra-Tech2 1.png"/>
                <img className="techno_img col-3" src="images/technologies/Hydra-Tech3 1.png"/>
                <img className="techno_img col-3" src="images/technologies/Hydra-Tech4 1.png"/>
            </div>
                </div>
               }
               {
                windowDimensions.width <=768 &&
                <div className="row justify-content-center imaegs_paernt">

                <div className="images_area row align-items-center justify-content-between">
                   
                <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img className="techno_img col-12" src="images/technologies/Hydra-Tech1 1.png"/>
    </div>
    <div class="carousel-item">
    <img className="techno_img col-12" src="images/technologies/Hydra-Tech2 1.png"/>

    </div>
    <div class="carousel-item">
    <img className="techno_img col-12" src="images/technologies/Hydra-Tech3 1.png"/>
    </div>
    <div class="carousel-item">
    <img className="techno_img col-12" src="images/technologies/Hydra-Tech4 1.png"/>
    </div>

  </div>
  <button class="carousel-control-prev prev_button " type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
  <span class="fas fa-arrow-left" ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next next_button " type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
  <span class="fas fa-arrow-right" ></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
                    </div>
               }

                
            </div>
        
        </div>
    )
}