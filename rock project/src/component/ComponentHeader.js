import React, { useRef } from "react";
export default function ComponentHeader(props){
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
        <div className="component_header ">
            
                <div className="component_content row align-items-start justify-content-center">
                    <div className="component_left col-12 col-md-6">
                        <div className="left_content">
                        <h1>{props.title}</h1>
                        <p>{props.prevtitle}</p>

                        </div>
                    </div>
                    
                    {
                        windowDimensions.width >=768 &&
                    <div className="component_right col-6">
                        <p> 
        {props.para}
                        </p>

                    </div>
                    }
                    

                </div>

        </div>
    )
}