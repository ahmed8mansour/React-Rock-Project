import React from "react";
// import DataCard from "./DataCard";
export default function Card(props){
    
    return(
       <div className=" shadow card_paernt d-flex justify-content-center align-items-center">
  
  
  <div className="card  row align-items-center text-center d-flex justify-content-center align-items-center">
 <img src={`/images/${props.image_folder}/${props.image_src}`}  className="card-img-top"/>
  
    <div className="card-body">
  
  <h3 className="big_text">{props.card_title}</h3> 

     <div className="lines">
          <div className="diamond">
  
          </div>
        </div>
        
        
     <p className="card-text">{props.card_text}</p>
     <button href="#" class="btn shadow align-self-end rock_btn">{props.button_text}</button>
                     
                     
    </div>
  </div>
  
  
       </div>
      )
  }