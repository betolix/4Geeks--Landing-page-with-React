import React from "react";
const CardOne=({card_title, card_text, card_img_src})=>{
return(
	

<div className="cardOne col-3 text-center">
  <img src={card_img_src} className="cardOne-img-top" alt="..."/>
  <div className="cardOne-body">
    <h5 className="cardOne-title">{card_title}</h5>
    <p className="cardOne-text">{card_text}</p>
  </div>  

  <div className="cardOne-footer bg-light">
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>

</div>

);

};
export default CardOne;