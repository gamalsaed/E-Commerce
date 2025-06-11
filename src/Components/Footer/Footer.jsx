// Components
import FooterSectionOne from "./SectionOne/FooterSOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"
import SectionFound from "./SectionFour/SectionFour"
import Fixed from "./fixed/fixed"
// Styling 
import "../../SASS/App/Footer/MainFooter/MainFooter.css"
const Footer = () => {
    
    return (
        <div className="Footer" >
            <FooterSectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFound/>
            <Fixed />
        </div>
    )
}
export default Footer
