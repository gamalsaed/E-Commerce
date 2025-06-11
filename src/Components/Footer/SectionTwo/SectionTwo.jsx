import "../../../SASS/App/Footer/SectionTwo/SectionTwo.css"
import { Link } from "react-router-dom"

const SectionTwo = () => {
    return (
        <div className="SectionTwo" >
            <div className="SectionTwo-Wrapper" >
                <ul className="SectionTwo-Company" >
                    <h2>COMPANY</h2>
                    <li><Link>About Us</Link></li>
                    <li><Link>Careers</Link></li>
                    <li><Link>Affiliates</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
                <ul className="SectionTwo-SHOP" >
                    <h2>SHOP</h2>
                    <li><Link>Televisions</Link></li>
                    <li><Link>Fridges</Link></li>
                    <li><Link>Washing Machines</Link></li>
                    <li><Link>Fans</Link></li>
                    <li><Link>Air Conditioners</Link></li>
                    <li><Link>Laptops   </Link></li>
                </ul>
                <ul className="SectionTwo-HELP" >
                    <h2>HELP</h2>
                    <li><Link>Customer Service</Link></li>
                    <li><Link>My Account</Link></li>
                    <li><Link>Find a Store</Link></li>
                    <li><Link>Legal & Privacy</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Gift Card</Link></li>
                </ul>
                <ul className="SectionTwo-ACCOUNT" >
                    <h2>MY ACCOUNT</h2>
                    <li><Link>My Profile</Link></li>
                    <li><Link>My Order History</Link></li>
                    <li><Link>My Wish List</Link></li>
                    <li><Link>Order Tracking</Link></li>
                </ul>
                <ul className="SectionTwo-INFO" >
                    <h2>CONTACT INFO</h2>
                    <li className="number" >+84 2500 888 33</li>
                    <li>Mon To Sun: 10:00 AM To 6:00 PM</li>
                    <li className="support" >support@example.com</li>
                    <li>48 West Temple Drive</li>
                    <li>Ashburn, VA 20147</li>
                </ul>
            </div>
        </div>
    )
}

export default SectionTwo


