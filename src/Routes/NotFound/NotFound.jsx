import "./notFound.css"
import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <div className="notFound-Wrapper" >
            <div className="notFound">
                <div>
                    <img src="https://demo2.pavothemes.com/technocy/wp-content/themes/technocy/assets/images/404/404.png" alt="" />
                </div>
                <div className="notFound-info" > 
                    <h1>Oops!</h1>
                    <h2>That Links Is Broken.</h2>
                    <p>Page does not exist or some other error occured. Go to our Home page</p>
                    <Link to="/" onClick={() => window.scroll(0)} >
                        <span>Go Back</span>
                        <span class="material-symbols-outlined arrow">chevron_right</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound