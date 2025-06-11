import "../../../SASS/App/Footer/SectionOneFooter/SectionOneFooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
const FooterSectionOne = () => {
    return (
        <div className="FooterSectionOne" >
            <div className="Part-One" >
                <div className="Mail" >
                    <span className="material-symbols-outlined  ">outgoing_mail</span>
                </div>
                <div className="des" >
                    <h2>Fear Of Missing Out?</h2>
                    <p>Get the latest deals, updates & more</p>
                </div>
            </div>
            <div className="Part-Two" >
                <input type="text" className="Footer-Input" placeholder="Your email address" />
                <button className="Footer-subcribe" >Subscribe</button>
            </div>
            <div className="Part-Three" >
                <div>FOLLOW US</div>
                <div className="social" >
                    <div className="icon" >
                        <FontAwesomeIcon  icon={faFacebook} />
                    </div>
                    <div className="icon" >
                        <FontAwesomeIcon  icon={faTwitter} />
                    </div>
                    <div className="icon" >
                        <FontAwesomeIcon  icon={faInstagram} />
                    </div>
                    <div className="icon" >
                        <FontAwesomeIcon  icon={faPinterest} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSectionOne