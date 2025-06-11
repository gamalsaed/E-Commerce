
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import { useRef } from "react";
import { useState, useEffect } from "react";
import "../../../SASS/ProductShow/ProductShow.css"
import star from "../../../imgs/star_FILL1_wght100_GRAD-25_opsz40.svg"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, AddTowhiteList, closeSlide } from "../../../ProductsSlice/productsSlice";
const ProductShow = ({slideActive}) => {
    let swipRef = useRef()
    const cardRef = useRef()
    const dispatch = useDispatch()
    const [swiper, setSwiper] = useState();
    const {Products} = useSelector(state => state.Products)
    const closeS = () => {
        dispatch(closeSlide())
        swipRef.current.style.zIndex = "-1"
        swipRef.current.style.display = "none"
        swipRef.current.style.opacity = "0"
    }
    const msgRef = useRef()
    const addtoCart = (state) => {
        dispatch(addToCart({product: state, count : 1}))
        msgRef.current.style.top = "0"
        msgRef.current.style.opacity = "1"
        setTimeout(() => {
            msgRef.current.style.top = "-40px"
            msgRef.current.style.opacity = "0"
        }, 2000)
    }
    const addToWhiteList = (state) => {
        dispatch(AddTowhiteList(state))
    }
    useEffect(() => {
        if(slideActive !== -1){
            if(swiper){
                swiper.slideTo(slideActive)
                swipRef.current.style.zIndex = "10000"
                swipRef.current.style.display = "flex"
                swipRef.current.style.opacity = "1"
            }
        }
    }, [slideActive])

    return (
        <div className="SlideShowParent"  ref={swipRef}>
        <div className="ProductShow-Container"  >
            <div className="addingmsg" ref={msgRef} >ITEM ADDED SUCCESSFULLY</div>
            <div className="background-product-show" onClick={ () =>  console.log("clicked")} ></div>
            <Swiper onSwiper={(swiper) => setSwiper(swiper)}  navigation={true} swipeHandler={true}  modules={[Navigation]} zoom={true} className="mySwiper ProductShow-Swiper">
                {Products.map(product => {
                    let looping = []
                    for(let i = 0 ; i < product.Rate; i++){
                        looping.push(i)
                    }
                    return (
                        <SwiperSlide key={product.Name}   >
                            <div className="product-Show-Slide" onClick={(e) => e.target.className === "product-Show-Slide" ? closeS() : ""}  >
                                <div className="product-Show-Slide-wrapper" ref={cardRef}  >
                                <span class="material-symbols-outlined product-show-close " onClick={closeS} >close</span>
                                    <div className="product-slide-show-img" >
                                        <img src={product.Img}  alt="" className="product-show-img" />
                                    </div>
                                    <div className="product-show-wrapper" >
                                        <div className="product-show-info" >
                                            <h2 className="product-show-Name" >{product.Name}</h2>
                                            <div className="product-show-details" >
                                                <div className="product-show-price-review" >
                                                    <div className="price" >${product.CurrentPrice}</div>
                                                    
                                                    <div className="stars" >
                                                        {looping.map((ele, i) => <img key={i} src={star} alt="" className="star" />)}
                                                    </div>
                                                    <div>  ({product.Rate} Customer Reviews)</div>
                                                </div>
                                                <div className="product-show-description" >{product.info}</div>
                                            </div>
                                        </div>
                                        <div className="product-show-actions" >
                                            <div className="product-show-count" >1</div>
                                            <div className="product-show-AddTo-Cart" onClick={() => addtoCart(product)} >
                                                <span class="material-symbols-outlined">shopping_cart</span>
                                                <span>ADD TO CART</span>
                                            </div>
                                            <div className={product.Like ? "product-show-like fill" : "product-show-like"} >
                                                <span class="material-symbols-outlined " onClick={ () => addToWhiteList(product)} > favorite</span>
                                            </div>
                                            <div className="product-show-compare" >
                                                <span class="material-symbols-outlined ">autorenew</span> 
                                            </div>
                                        </div>
                                        <div className="product-show-section" >
                                            <span>Category: </span>
                                            <span className="product-show-section" >{product.Section[0]}</span>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </div>
    </div>
    )
}

export default ProductShow
