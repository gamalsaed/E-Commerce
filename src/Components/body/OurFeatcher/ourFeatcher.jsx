
import { useRef } from "react";
import star from "../../../imgs/star_FILL1_wght100_GRAD-25_opsz40.svg"
import "../../../SASS/ourfeatcherd/ourFeatcher.css"
import { useDispatch } from "react-redux";
import { AddTowhiteList, addToCart, setActiveSlide, addSearch } from "../../../ProductsSlice/productsSlice";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const OurFeatcher = (props) => {
    let looping = []
    for(let i = 0; i < props.product.Rate; i++){
        looping.push(i)
    }
    const scrollClick = () => {
        window.scroll({
            top:"0"
        })
    }
    const buttonRef = useRef()
    const dispatch = useDispatch()
    const addFav = (e) => {
            dispatch(AddTowhiteList(props.product))
    }
    const addToCar = (e) => {
        e.currentTarget.children[0].style.display = "block"
        buttonRef.current.style.opacity = "0.5"
        setTimeout(() => {
            buttonRef.current.style.opacity = "1"
            buttonRef.current.children[0].style.display = "none"
        }, 2000)
        dispatch(addToCart({product: props.product, count: 1}))
    }
    const viewFull = (e) =>{
        dispatch(setActiveSlide(props.product.Id))
    }
    return ( 
        <div className="main-card"    >
            <div className={props.styling === 270?"ProductCard featchered" : "ProductCard topSellingItems"}   >
            {props.product.Sale ? <div className="sale" >Sale!</div> : <div></div>}
            <div className="settingOfProduct" >
                <span class={props.product.Like ? "material-symbols-outlined fav fill" : "material-symbols-outlined fav"}  onClick={addFav}> favorite <small className="addToWhiteList" >Add to white list</small></span>
                <span class="material-symbols-outlined auto ">autorenew <small>Compare</small></span> 
                <span class="material-symbols-outlined full" onClick={viewFull} >fullscreen <small>Quick view</small>

                </span>
            </div>
                <div className="ProductImg" >
                    <Link to={`/Card/${props.product.Name}`} >
                        <img onClick={scrollClick} src={props.product.Img} alt="" />
                    </Link>
                </div>
                <div className="ProductInformation" >
                    <div className="Section">
                        {props.product.Section.map(one => <Link to={`/Home/Shop/${one}`} onClick={() => dispatch(addSearch(one))} className="link-section" > {one} </Link>)}
                    </div>
                    <div className="Name"  ><Link className="Name-a" onClick={scrollClick} to={`/Card/${props.product.Name}`}  >{props.product.Name}</Link></div>
                    <div className="stars" >
                        {looping.map((ele, i) => <img key={i} src={star} alt="" className="star" />)}
                        <span className="rev" >{looping.length} Review</span>
                    </div>
                    {
                        !props.product.Sale ? <div className="ProductPrice"><span>${props.product.CurrentPrice}</span></div> : <div className="ProductPrice"><span className="currentPrice" >${props.product.CurrentPrice}</span><span className="oldPrice" >${props.product.oldPrice}</span></div>
                    } 
                </div>
            <div className={props.styling === 270 ? "add-botton-parent w84" : "add-botton-parent w80"} >
                <div className="add-botton" ref={buttonRef} onClick={addToCar} >
                    <div className="loading" ></div>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span>ADD TO CART</span>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default OurFeatcher;





































































































































































































