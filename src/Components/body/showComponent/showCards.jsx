import React from "react";
import '../../../SASS/cards/cards.css'
const ShowCards = (props) =>{
    let cardStyle = {
        backgroundImage: props.background,
        width: "450px",
        height: "230px"
    }
    return (
        <div className="mainCard" >
            <div className="card" style={cardStyle} ></div>
            <div className="txt" >
                <span className="type">{props.type}</span>
                <span className="Name" >{props.name}</span>
                    {props.price.Start ? <div><small>starting from</small><span className="Posterprice" >${props.price.Start}</span></div> :<div> <small className="priceWas" >${props.price.PriceWas}</small><span className="CurrentPrice" >${props.price.current}</span></div> ? <div></div> : ""}
                <div className="divShop" >
                    <small className="shop"  >Shop Now</small>
                </div>
            </div>  
        </div>
    )
}

export default ShowCards


