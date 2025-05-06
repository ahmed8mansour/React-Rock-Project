import React, { useRef } from "react";
import ComponentHeader from "./ComponentHeader";
export default function HowTo(){
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
        <div className="howto_section my_section" id="HowTo">
            <div className="container">
                <ComponentHeader
                   title="how we build"
                   prevtitle="with hydra vr?"
                   para="
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque reiciendis accusantium laudantium voluptas molestias, omnis perspiciatis est alias labore autem?
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque omnis perspiciatis est alias labore autem?
   "
                />

            </div>
            {
                windowDimensions.width >=768 &&
            <div className="steps_main">
                <div className="container">
                    <div className="steps_content row align-items-center justify-content-between">
                        <div className="col-lg-3 col-6 row justify-content-center align-items-start">
                        <div className="arrow_rock step text-center">
                            01
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                                
                            <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> 
                                3D Conception & Design
                                
                            </h3>
                            
                        </div>
                            
                        </div>
                        <div className="col-lg-3 col-6 row justify-content-center ">
                        <div className="arrow_rock step text-center">
                            02
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                            <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> 
                                
                                Interaction Design 
                            </h3>
                            
                        </div>
                            
                        </div>
                        <div className="col-lg-3 col-6 row justify-content-center">
                        <div className="arrow_rock step text-center">
                            03
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                            <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> 
                                
                                VR World User testing
                            </h3>
                            
                        </div>
                            
                        </div>
                        <div className="col-lg-3 col-6 row justify-content-center">
                        <div className="arrow_rock step text-center">
                            04
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                            <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> 
                                
                                Hydra VR Deploy 
                            </h3>
                            
                        </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            }
            {
                windowDimensions.width  <=768 &&
                <div className="steps_main">
                <div className="container">
                    <div className="steps_content row align-items-center justify-content-between">
                    <div id="carouselExampleControls4" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="row justify-content-center align-items-start">
                        <div className="arrow_rock step text-center">
                            01
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                                
                    { windowDimensions.width  >= 768 &&  <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> }       
                                3D Conception & Design
                                
                            </h3>
                            
                        </div>
                            
                        </div>
    </div>
    <div class="carousel-item">
    <div className="row justify-content-center ">
                        <div className="arrow_rock step text-center">
                            02
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                            { windowDimensions.width  >= 768 &&  <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> }       

                                
                                Interaction Design 
                            </h3>
                            
                        </div>
                            
                        </div>
    </div>
    <div class="carousel-item">
    <div className=" row justify-content-center">
                        <div className="arrow_rock step text-center">
                            03
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                            { windowDimensions.width  >= 768 &&  <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> }       

                                
                                VR World User testing
                            </h3>
                            
                        </div>
                            
                        </div>
    </div>
    <div class="carousel-item">
    <div className=" row justify-content-center">
                        <div className="arrow_rock step text-center">
                            04
                        </div>
                        <div className="arrow_down text-center">
                            <h3>
                            { windowDimensions.width  >= 768 &&  <span class="fas fa-arrow-right navbar_toggler " style={{fontSize:"20px",}}></span> }       

                                
                                Hydra VR Deploy 
                            </h3>
                            
                        </div>
                            
                        </div>
    </div>
  </div>
  <button class="carousel-control-prev prev_button " type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
  <span class="fas fa-arrow-left" ></span>

    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next next_button  " type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
  <span class="fas fa-arrow-right" ></span>

    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            </div>
            </div>


            }



            <div className="contact_area">
                <div className="container">
                <div className=" card_paernt contact_card d-flex justify-content-center align-items-center">


<div className="card shadow row align-items-center text-center d-flex justify-content-center align-items-center">

  <div className="card-body">

<h1 className="card-title"> Join Hydra</h1>  
   <div className="lines">
        <div className="diamond">

        </div>
      </div>
      
<p className="card_under_text">Let's Build Your VR Experience</p>    

   <div className="card-text row " >
  
<div class="form-floating mb-3 col-sm-12 col-md-6  ">
  <input class="form-control" id="floatingPassword" placeholder="Your Name"/>
  <label for="floatingPassword" >First Name</label>
</div>

<div class="form-floating mb-3 col-sm-12 col-md-6">
  <input class="form-control" id="floatingPassword" placeholder="Your Name"/>
  <label for="floatingPassword" >Last Name</label>
</div>
      
   <div class="form-floating mb-3 col-sm-12 col-md-6">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput" >Email</label>
</div>

<div class="form-floating mb-3 col-sm-12 col-md-6">
  <input class="form-control" id="floatingPassword" placeholder="Your Phone"/>
  <label for="floatingPassword" >Phone Number</label>
</div>

<div class="form-floating mb-3 col-12 ">
  <input class="form-control" id="floatingPassword" placeholder="Your Name"/>
  <label for="floatingPassword" >Subject</label>
</div>

<div class="form-floating mb-3 col-12">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"  style={{minHeight:"100px !important",}}>Comments</label>
    
    </div>   
  <button type="button" class="btn rock_btn">Send To Hydra</button>

    </div>                   
                   
  </div>
</div>


     </div>
                </div>

            </div>
        </div>
    )
}