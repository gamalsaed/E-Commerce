import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"
import "../../../SASS/App/Footer/SectionThree/SectionThree.css"
const SectionThree = () => {
    return (
        <div className="SectionThree" >
            <div className="SectionThree-Wrapper" >
                <div className="Section-Three-Icons" >
                    <div>
                        <FontAwesomeIcon className="iconss" icon={faTruckFast}  />
                    </div>
                    <div className="descip" >
                        <h4>Free Delivery</h4>
                        <div>Free shipping over $100</div>
                    </div>
                </div>
                <div className="Section-Three-Icons" >
                    <div>
                        <span class="material-symbols-outlined iconss ">replay</span>
                    </div>
                    <div className="descip" >
                        <h4>Free Return</h4>
                        <div>Free return over $100</div>
                    </div>
                </div>
                <div className="Section-Three-Icons" >
                    <div>
                        <span class="material-symbols-outlined iconss ">support_agent</span>
                    </div>
                    <div className="descip" >
                        <h4>Customer Support</h4>
                        <div>Friendly 24/7 customer support</div>
                    </div>
                </div>
                <div className="Section-Three-Icons" >
                    <div>
                        <span class="material-symbols-outlined iconss ">verified_user</span>
                    </div>
                    <div className="descip" >
                        <h4>Money Back Guaranteey</h4>
                        <div>Quality checked by our team</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree