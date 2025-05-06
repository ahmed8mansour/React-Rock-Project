import React, {useRef} from "react";
import ComponentHeader from "./ComponentHeader";

export default function About(){
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
        <div className="my_section about_section" id="About">
        <div className="container">
        <ComponentHeader
        title="introduction"
        prevtitle="to hydra vr"
        para="
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque reiciendis accusantium laudantium voluptas molestias, omnis perspiciatis est alias labore autem?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque omnis perspiciatis est alias labore autem?
"
        />
        <div className="about_content">
        <div className="row align-items-start">
        {/* "about_left col-12 col-lg-6 row" */}
        <div className={windowDimensions.width <=992 ? "about_left col-12 col-lg-6 row" :"about_left col-12 col-lg-6 "}>
        <img className="about_img" src="/images/about/Mask group.png"/>
        </div>
        <div className={windowDimensions.width <=992 ? "about_right col-12 col-lg-6 row  mt-5" :"about_right col-12 col-lg-6 "}>
            {
                windowDimensions.width >=768 &&
            <div>

                <h1>about</h1>
                <p className="right_para"> hydra vr</p>
            </div>
            }
            {
            windowDimensions.width >=1200 &&
        <p className="right_para2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque reiciendis accusantium laudantium voluptas molestias, omnis perspiciatis est alias labore autem?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque omnis perspiciatis est alias labore autem?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque reiciendis accusantium laudantium voluptas molestias, omnis perspiciatis est alias labore autem?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque omnis perspiciatis est alias labore autem?
        
        </p> 
            }
        {
            windowDimensions.width <=1200 &&
            <p className="right_para2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque reiciendis accusantium laudantium voluptas molestias, omnis perspiciatis est alias labore autem?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus error odit sint velit culpa sapiente rem laborum ex cumque omnis perspiciatis est alias labore autem?
            </p> 
        }
        <button type="button" class="btn btn-outline-light rock_btn ">let's git in touch </button>


        </div>
        </div>
        </div>
             
        </div>
        </div>
    )
}