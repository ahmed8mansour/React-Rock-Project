import React,{useRef} from "react";
export default function Footer(){
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
    
  let social_classname = "";
  if(windowDimensions.width >= 1200) {
    social_classname = "social-network d-flex align-items-center justify-content-center "
  }else if(windowDimensions.width <= 1200 && windowDimensions.width >=768){
    social_classname = "social-network row align-items-center justify-content-center "
  }else if( windowDimensions.width <=768){
    social_classname = "social-network d-flex align-items-center justify-content-between "
  }
  let li_margin = "";
  if(windowDimensions.width <=1200 && windowDimensions.width >=768) {
    li_margin = "mt-5"
  }else if( windowDimensions.width <=768){
    li_margin = " "
  }
  // console.log(
  // document.getElementsByClassName("social-network")

  //   )
    return(
        <div className="footer_Section ">
            <div className="container">
                <div className="footer_content my_section row align-items-start justify-content-between">
                    <div className="footer_peace col-md-3 row align-items-center justify-content-center ">
                        <img className="footer_image" src="/images/footer/Frame.png" />
                    </div>
                    {
                      windowDimensions.width>=768 &&
                    <div className="footer_peace col-3 row align-items-center justify-content-center">
                    
                    <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
         
         <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#">Home</a>
             </li>
             
             <li class="nav-item">
               <a class="nav-link" href="#">Services</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">Techonlogies</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">How To</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">Join Hydra</a>
             </li>
    
           
           </ul>
                        </div>
                    }
                     {
                      windowDimensions.width >=768 &&
                    <div className="footer_peace col-3 row align-items-center justify-content-center">
                    <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
         
         <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#">F.A.Q</a>
             </li>
             
             <li class="nav-item">
               <a class="nav-link" href="#">sitemap</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">conditions</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">license</a>
             </li>
    
           
           </ul>                   
            </div>
                    }
                    <div className="footer_peace_last col-md-3 row align-items-center justify-content-start">
                        <p className="footer_last_text">
                            Socilaize with hydra
                        </p>
                        
                        {/* "social-network row align-items-center justify-content-center " */}
                        <ul class={social_classname}>
        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        <li className={li_margin}><a href="#"><i class="fab fa-youtube"></i></a></li>
        <li className={li_margin}><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li className={li_margin}><a href="#"><i class="fab fa-github"></i></a></li>
    </ul>
                        <button type="button" class="btn btn-outline-light rock_btn ">build your world</button>

                    </div>
                </div>
                <hr/>
    <p className="footer_text"> 2024 &copy; hydra landing page - by Ahmed Mansour - all rights reserved</p>
                
            </div>

        </div>
        
        
    )
}