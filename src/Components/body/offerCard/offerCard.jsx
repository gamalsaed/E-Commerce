import "../../../SASS/offerCard/offerCard.css"
import { Link } from "react-router-dom"
const OfferCard = (props) => {

    return (
        <div className="OfferCard" >
            <div className="OfferCard-Wrapper" style={{height: props.Cheight ? props.Cheight : "180px" }} >
                <img src={props.background} alt="" />
                <div className="OfferCard-Info" >
                    <div className="type" >{props.type}</div>
                    <div className="name" >{props.name}</div>
                    <div className="shop-wrapper" >
                        <div className="shop" >
                            <Link to="/Home/Shop/Shopping" >Shop Now</Link>
                            <span class="material-symbols-outlined arrow-cyc ">chevron_right</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default OfferCard
