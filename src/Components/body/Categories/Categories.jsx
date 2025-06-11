
import "../../../SASS/Categories/Categories.css"
// import Categories from './Categories';
import { Link } from "react-router-dom";
const Categories = () => {
    return ( 
    <div className="gicons" >
        <div>
                <span className="icon" >
            <Link to="/Home/Shop/Mobiles" >
                <span class="material-symbols-outlined icon">phone_iphone</span>
                    <span className="text" >Mobiles</span>
            </Link>
                </span>
                <div className="lin" ></div>
        </div> 
        <div>
            <span className="icon" >
            <Link to="/Home/Shop/Tablets" >
            <span class="material-symbols-outlined icon ">tablet_mac</span>
                <span className="text" >Tablets</span>
            </Link>
            </span>
            <div className="lin" ></div>
        </div> 
        <div>
            <span className="icon" >
                <Link to="/Home/Shop/Computer & Gaming">
                    <span class="material-symbols-outlined icon ">laptop_chromebook</span>
                    <span className="text" >Laptops</span>
                </Link>
            </span>
            <div className="lin" ></div>
        </div> 
        <div>
            <span className="icon" >
                <Link to="/Home/Shop/Televisions" >
                    <span class="material-symbols-outlined icon ">Tv</span>
                    <span className="text" >Television</span>
                </Link>
            </span>
            <div className="lin" ></div>
        </div> 
        <div>
            <span className="icon" >
                <Link to="/Home/Shop/Home Appliances" >
                    <span class="material-symbols-outlined icon ">kitchen</span>
                    <span className="text" >Refrigerators</span>
                </Link>
            </span>
            <div className="lin" ></div>
        </div> 
        <div>
            <span className="icon" >
                <Link to="/Home/Shop/Washing Machine" >
                    <span class="material-symbols-outlined icon ">dishwasher_gen</span>
                    <span className="text" >Washing Machine</span>
                </Link>
            </span>
            <div className="lin" ></div>
        </div> 
        <div>
            <span className="icon" >
                <Link to="/Home/Shop/Air Conditioner" >
                    <span class="material-symbols-outlined icon ">mode_fan</span>
                    <span className="text" > Air Conditioner & Fan</span>
                </Link>
            </span>
            <div className="lin" ></div>
        </div> 
        <div>
            <span className="icon" >
                <Link to="/Home/Shop/Home Appliances" >
                    <span class="material-symbols-outlined icon ">blender</span>
                    <span className="text" >Kitchen Appliances</span>
                </Link>
            </span>
            <div className="lin" ></div>
        </div> 
        
        <span className="space" ></span>
    </div>
     );
}
 
export default Categories;