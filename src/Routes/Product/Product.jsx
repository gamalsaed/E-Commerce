import { useSearchParams, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "../../Routes Styling/ProductComponent/product.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import OfferCard from "../../Components/body/offerCard/offerCard"
import star from "../../imgs/star_FILL1_wght100_GRAD-25_opsz40.svg"
import { addToCart, AddTowhiteList } from "../../ProductsSlice/productsSlice"
import OurFeatcher from "../../Components/body/OurFeatcher/ourFeatcher"
// Component
import ProductInfo from "./ProductInfo"

const Product = () => {
    const {Products, categores} = useSelector(state => state.Products)
    let para = useParams()
    let prodU = Products.filter(pro => pro.Name === para.product)
    const [prod, setProduct] = useState(prodU)
    useEffect(() => {
        setProduct(prev => {
            let produc =  Products.filter(pro => pro.Name === para.product)
            return produc
        })
            setStars(prev => {
                let newArr = []
                for(let i = 0; i < prod.Rate; i++){
                    newArr.push(i)
                }
                return newArr
            })
        
        }, [para.product])

    let number;
    const dispatch = useDispatch()
    const [stars, setStars] = useState([])
    const [counter, setCounter] = useState(1)
    const cartButtonRef = useRef()
    const [releted, setReleted] = useState([1, 2, 3])

    

    const addtoCart = (e) => {
        e.currentTarget.style.opacity = ".5"
        setTimeout(() => {
            cartButtonRef.current.style.opacity = "1"
        }, 2000)
        dispatch(addToCart({product : prod[0], count: counter}))
        setCounter(1)
    }

    let [productOne, setProductOne] = useState(Math.floor(Math.random() * Products.length))
    let [productTwo, setProductTwo] = useState(Math.floor(Math.random() * Products.length))
    let [productThree, setProductThree] = useState(Math.floor(Math.random() * Products.length))
    if(prod){
        return (
        <div className="productComponent" >
            <div className="locationProduct" >
                <h4 className="location" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> <Link to={`/Home/Shop/${prod[0].Section[0]}`} >{prod[0].Section[0]}</Link> <span class="material-symbols-outlined">chevron_right</span> <span>{prod[0].Name}</span></h4>
            </div>
            <div className="productComponent-wrapper" >
                <div className="Categories-Of-Product-Component prodact-page" >
                    <div className="Product-categories" >
                        <h4>Product categories</h4>
                        <ul className="Product-categories-list" >
                            <li>
                                <input type="checkbox" checked={ prod[0].Section[0] === "Accessories" ? true : false} className="check"  name="" id="" />
                                <Link>Accessories</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Air Conditioner" ? true : false} name="" id="" />
                                <Link>Air Conditioner</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={ prod[0].Section[0] === "Computer & Gaming" ? true : false} name="" id="" />
                                <Link>Computer & Gaming</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Home Appliances" ? true : false} name="" id="" />
                                <Link>Home Appliances</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Laptops" ? true : false} name="" id="" />
                                <Link>Laptops</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Mobiles" ? true : false} name="" id="" />
                                <Link>Mobiles</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Tablets" ? true : false} name="" id="" />
                                <Link>Tablets</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Televisions" ? true : false} name="" id="" />
                                <Link>Televisions</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Uncategorized" ? true : false} name="" id="" />
                                <Link>Uncategorized</Link>
                            </li>
                            <li>
                                <input type="checkbox" checked={prod[0].Section[0] === "Washing Machine" ? true : false} name="" id="" />
                                <Link>Washing Machine</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="Recent-Products" >
                        <h4>Recent Products</h4>
                        <div className="Recent-Products-parent">
                            <div className="prod" >
                                <img src={prod[0].Img} alt="" />
                                <div>
                                    <Link to={`/Card/${Products[productOne].Name}`} >{Products[productOne].Name}</Link>
                                    <div className="recent-price" ><span className="Before" >{Products[productOne].Sale ? `$${Products[productOne].oldPrice}` : ""}</span><span className="after" >${Products[productOne].CurrentPrice}</span> </div>
                                </div>
                            </div>
                            <div className="prod" >
                                <img src={Products[productTwo].Img} alt="" />
                                <div>
                                    <Link to={`/Card/${Products[productTwo].Name}`} >{Products[productTwo].Name}</Link>
                                    <div className="recent-price" ><span className="Before" >{Products[productTwo].Sale ? `$${Products[productTwo].oldPrice}` : ""}</span><span className="after" >${Products[productTwo].CurrentPrice}</span> </div>
                                </div>
                            </div>
                            <div className="prod" >
                                <img src={Products[productThree].Img} alt="" />
                                <div>
                                    <Link to={`/Card/${Products[productThree].Name}`} >{Products[productThree].Name}</Link>
                                    <div className="recent-price" ><span className="Before" >{Products[productThree].Sale ? `$${Products[productThree].oldPrice}` : ""}</span><span className="after" >${Products[productThree].CurrentPrice}</span> </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <OfferCard name={categores[0].Name} key={categores[0].Name} type={categores[0].type} background={categores[0].background} mode={categores[0].mode}  />
                    </div>
                </div>
                <div className="Product-Card" >
                    <div className="Product-Card-wrapper">
                        <div className="card-component">
                            <div className="info">
                                <h4>{prod[0].Name}</h4>
                                <div className="card-component-details" >
                                    <div className="card-component-brand" >
                                        <span>Brand: </span>
                                        <span className="brand" >{prod[0].Brand}</span>
                                    </div>
                                    <div className="card-component-review" >
                                        <div className="stars" >
                                            {stars.map(i => <img src={star}  />)}
                                        </div>
                                        <div className="review" >
                                            ({prod[0].Rate} Customer Reviews)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping-card" >
                                <div className="shopping-card-img" >
                                    <div className="shopping-card-img-wrapper" >
                                        {prod[0].Sale ? <span className="sale sale-card" >Sale!</span> : ""}
                                        <img src={prod[0].Img} className="shopping-card-src" alt="" />
                                    </div>
                                </div>
                                <div className="shopping-card-details" >
                                    <div className="shopping-card-details-price" >
                                        {prod[0].Sale ? <span className="oldPriceCard" >${prod[0].oldPrice}</span> : ""}
                                        <span className="CurrentPriceCard" >${prod[0].CurrentPrice}</span>
                                    </div>
                                    <div className="Availability" >
                                        <span>Availability: </span>

                                     {prod[0].Availability ? <span className="available" >In Stock</span> : <span className="unavalibale" >Out Of Stock</span> }
                                    </div>
                                    <div className="parag" >
                                        <p>{prod[0].info}</p>
                                    </div>
                                    <div className="shopping-card-tools" >
                                        <div className="counter">
                                            <div>
                                                <span class="material-symbols-outlined mini" onClick={() => {
                                                    if(counter > 1){
                                                        setCounter(prev => prev -= 1)
                                                    }
                                                }} >minimize</span>
                                            </div>
                                            <div>

                                            <span className="count" >{counter}</span>
                                            </div>
                                            <div>

                                            <span class="material-symbols-outlined plus" onClick={() => {
                                                setCounter(prev => prev += 1)
                                            }} >add</span>
                                            </div>
                                        </div>
                                        <div className="shopping-card-add" ref={cartButtonRef} onClick={addtoCart} >
                                            <span class="material-symbols-outlined"  >shopping_cart</span>
                                            <span>ADD TO CART</span>
                                        </div>
                                        <div className="shopping-card-like" >
                                        <span class={ prod[0].Like ?  "material-symbols-outlined fill" : "material-symbols-outlined"} onClick={(e) => {
                                            dispatch(AddTowhiteList(prod[0]))
                                            e.target.classList.add("fill")
                                        }} > favorite</span>
                                        </div>
                                        <div className="shopping-card-compare">
                                            <span class="material-symbols-outlined ">autorenew</span> 
                                        </div>
                                    </div>
                                    <div className="Categore" >
                                        <span className="categ" >Categories: </span>
                                        <span className="sec" >{prod[0].Section[0]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductInfo product={prod[0]} />
                    <h1>Related products</h1>
                    <div className="releted" >
                        {releted.map((ele, i) => <OurFeatcher key={Products[i].Name} styling={0} product={Products[i]} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default Product
