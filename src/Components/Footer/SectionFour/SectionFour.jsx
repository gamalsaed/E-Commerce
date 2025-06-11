import "../../../SASS/App/Footer/SectionFour/SectionFour.css"
import { Link } from "react-router-dom"

const SectionFound = () => {
    return (
        <div className="SectionFour" >
            <div className="SectionFour-Wrapper" >
                <div>Copyright © 2023 <Link>Technocy</Link>. All rights reserved</div>
                <div className="right-side" >
                    <ul className="links" >
                        <li> <Link>Privacy Policy</Link> | </li>
                        <li> <Link>Terms & Conditions</Link> | </li>
                        <li> <Link>Cookie</Link> </li>
                    </ul>
                    <div>
                        <div><img src="https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/Footer_01.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFound