import React, { useRef } from "react";

export default function Home(){
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
        <div className="my_section home_section" >
            <div className="container">
            <nav class="navbar navbar-expand-lg "> 
 
 <div class="container">
 <a class="navbar-brand row align-items-center" href="#">
      <img src="/images/home/Frame.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      <img src="/images/home/Group.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top second_image"/>
      
      {/* HYDRA */}
    </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="fas fa-bars-staggered navbar_toggler"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
     <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
         
     <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#About">About</a>
         </li>
         
         <li class="nav-item">
           <a class="nav-link" href="#Services">Services</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#Techno">Techonlogies</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#HowTo">How To</a>
         </li>
         

       
       </ul>

       <button type="button" class="btn btn-outline-light rock_btn nav_btn">Contact Us</button>
       <button type="button" class="btn btn-outline-light rock_btn ">Join Hypra </button>



       </div>
   </div>
 </nav>

             <div className="home_content">
                <div className="row justify-content-center">
                    <div className="row justify-content-between text-start home_content_paernt">
                            <div className="home_content_left col-md-6 col-12 row">

                        <h1 className="home_title">
                            <span>dive</span>  into the depths of <span>virtual reailty</span> 
                            </h1> 
                        { windowDimensions.width >= 768 && 
                        <p className="home_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt suscipit in ullam quam sequi ad deleniti fugit voluptatibus assumenda harum, quos temporibus alias at et quasi similique? Suscipit, totam.

                        </p>
                        }
                        <div className="button_area">
                        <button type="button" class="btn btn-outline-light rock_btn ">build your world </button>
                        
                        { windowDimensions.width >= 768 &&  <span class="fas fa-arrow-right navbar_toggler" style={{marginLeft:"30px", fontSize:"20px"}}></span> }

                        </div>
                        
       </div>
       {/* "home_content_right col-6 d-flex justify-content-end" */}
       {/* <div className={width >= 1400 ? "home_content_right col-6 d-flex justify-content-end" : "home_content_right col-6 row justify-content-end"}> */}
       <div className= "home_content_right col-md-6 col-12 d-flex justify-content-end">
                                
                                <img src="/images/home/mask group.png" />
                                
                            </div>

                    </div>

                </div>
                
                </div>     

           { windowDimensions.width <= 768 &&
            <div className="home_footer row align-items-center justify-content-between">
           
           {/* ==================== */}
           {/* ==================== */}

          
           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="first_peace col-12 d-flex justify-content-center align-items-center text-center">
            <i class="fa fa-location-dot  "></i>
            <div className="footer_text d-inline-block text-center ">
                <h3> Pay Us a Visit</h3>
                <p> Union St. Seattle, WA 98101, United States</p>
                {/* <img src="images/home/Hydra-Desktop-(To Edit).png"/> */}
            </div>

                </div>

    </div>
    <div class="carousel-item">
    <div className="second_peace col-12 d-flex justify-content-center align-items-center text-center">
            <i class="fa fa-phone-volume "></i>
            <div className="footer_text d-inline-block text-center ">
                <h3> Give Us a Call</h3>
                <p>(110) 1111-1010</p>
                {/* <img src="images/home/Hydra-Desktop-(To Edit).png"/> */}
            </div>

                </div>
    </div>
    <div class="carousel-item">
    <div className="third_peace col-12 d-flex justify-content-center align-items-center text-center">
            <i class="fa fa-envelope  mt-auto mb-auto"></i>
            <div className="footer_text d-inline-block text-center ">
                <h3> Send Us a Message</h3>
                <p> Contact@HydraVTech.com</p>
                {/* <img src="images/home/Hydra-Desktop-(To Edit).png"/> */}
            </div>

                </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           {/* ==================== */}
           {/* ==================== */}
               
               
              
            </div>
 }

 { windowDimensions.width >=767 &&

<div className="home_footer row align-items-center justify-content-between">
           
           {/* ==================== */}
           {/* ==================== */}

          
    <div className="first_peace  col-4 d-flex justify-content-center align-items-center text-center">
            <i class="fa fa-location-dot  m-auto"></i>

            <div className="footer_text d-inline-block text-center ">
                <h3> Pay Us a Visit</h3>
                <p> Union St. Seattle, WA 98101, United States</p>
                {/* <img src="images/home/Hydra-Desktop-(To Edit).png"/> */}
            </div>

                </div>

    <div className="second_peace col-4 d-flex justify-content-center align-items-center text-center">
            <i class="fa fa-phone-volume "></i>
            <div className="footer_text d-inline-block text-center ">
                <h3> Give Us a Call</h3>
                <p>(110) 1111-1010</p>
                {/* <img src="images/home/Hydra-Desktop-(To Edit).png"/> */}
            </div>

                </div>
    <div className="third_peace col-4 d-flex justify-content-center align-items-center text-center">
            <i class="fa fa-envelope  mt-auto mb-auto"></i>
            <div className="footer_text d-inline-block text-center ">
                <h3> Send Us a Message</h3>
                <p> Contact@HydraVTech.com</p>
                {/* <img src="images/home/Hydra-Desktop-(To Edit).png"/> */}
            </div>

                </div>
  </div>

}
 
</div>
           {/* ==================== */}
           {/* ==================== */}
               
               
              
          
           
        </div>
    )
}