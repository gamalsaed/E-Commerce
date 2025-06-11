
import "../../../SASS/App/Footer/Fixed/Fixed.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Fixed = () => {
    const SearchSlide = (e) => {
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].children[1].style.display = "block"
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].children[1].style.opacity = '0.6'
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].children[6].style.top = "0"
    }
    const { Active } = useSelector(state => state.user)
    console.log(Active)
    return (
        <div className="FixedFooter" >
            <div className="Fixed-Wrapper">
                <Link className="Footer-box" to={"/"} >
                    <span className="Fiexed-Footer" >Shop</span>   
                    <span class="material-symbols-outlined fixed-icon">home</span>
                </Link>
                <Link className="Footer-box"  to={Active ? "/Account/Information" : "/Login"} >
                    <span className="Fiexed-Footer"   >My Account</span>
                    <span class="material-symbols-outlined fixed-icon ">person</span>
                </Link>
                <Link className="Footer-box" onClick={SearchSlide} >
                    <span className="Fiexed-Footer"  >Search</span>
                    <span class="material-symbols-outlined fixed-icon ">search</span>
                </Link>
                <Link className="Footer-box" to="/Home/Whitelist" >
                    <span className="Fiexed-Footer" >Whitelist</span>
                    <span class="material-symbols-outlined fixed-icon ">favorite</span>
                </Link>
            </div>
        </div>
    )
}

export default Fixed
