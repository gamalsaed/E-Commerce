import "../../Routes Styling/checkout/checkout.css"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState, memo, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { discount } from "../../ProductsSlice/productsSlice"
// import DropDownLit from "../../Components/OtherComponents/DropDownList/dropDownList"
const CheckOut = () => {

    const {cartProducts, total, CoponsOnFire, Copons} = useSelector(state => state.Products)
    const { information } = useSelector(state => state.user)
    console.log(information)
    const dispatch = useDispatch()
    const copoRef = useRef()
    const discountFire = () => {
        if(!CoponsOnFire){

            for(let i = 0; i < Copons.length; i++){
                if(copoRef.current.value === Copons[i].copon){
                    dispatch(discount(Copons[i]))
                }
            }
        }
    }
    let [order, setOrder] = useState({
        fName:"",
        lName:"",
        Company:"",
        Country:"",
        City:"",
        streetAdress:{
            HouseNum:"",
            apartment:""
        },
        postCode:"",
        Phone:"",
        Email:"",
        additionalInformation:"",
        paymentMethod:""
    })
    
    const checkRef = useRef()
    const CouponRef = useRef()
    const [data, setData] = useState()
    const [api, setApi] = useState(false)
    const [ele, setEle] = useState(0)
    const [city, setCity] = useState()
    const load = useRef()
    let [copo, setCopo] = useState(false)
    const [search, setSearch] = useState("")
    const [searchCity, setSearchCity] = useState("")
    const radioOne = useRef()
    const radioTwo = useRef()
    const radioThree = useRef()
    const radioClick = (e) => {
        console.log(e.target.value)
        setOrder({...order, paymentMethod:e.target.value})
        let radios = [radioOne, radioTwo, radioThree]
        radios.forEach((ele) => {
            ele.current.style.height = "0px"
        })
        e.target.parentElement.parentElement.children[1].style.height = `${e.target.parentElement.parentElement.children[1].children[0].offsetHeight + 40}px`
    }
    const toggleCoupon = () => {
        if(!copo){
            console.log(checkRef.current.offsetHeight)
            if(checkRef.current.offsetHeight > 1550){
                CouponRef.current.style.height = `${(20 * checkRef.current.offsetHeight) / 100}px`
            }else{
                CouponRef.current.style.height = `${(11 * checkRef.current.offsetHeight) / 100}px`
            }
            setCopo(prev => !prev)
        }else{
            CouponRef.current.style.height = `0px`
            setCopo(prev => !prev)
        }
    }
    useEffect(  () => {
         axios.get("https://countriesnow.space/api/v0.1/countries/states")
        .then(res => res)
        .then(res => setData(res))
        if(data === undefined){
            setEle(prev => prev + 1)
            load.current.style.display = "block"

        }
        if(data){
            console.log(data)
            setApi(true)
            load.current.style.display = "none"
        }
    }, [ele])


    const readOnlyRef = useRef()
    const ListRef = useRef()
    const toggleList = (e) => {
        ListRef.current.classList.toggle("dropDownListActivate")
        if(ListRef.current.classList[1] === "dropDownListActivate")
            e.currentTarget.children[1].style.transform = "rotate(180deg)"
        else
            e.currentTarget.children[1].style.transform = "rotate(0)"
    }
    const ndList = useRef()
    const cityRef = useRef()
    const choseCity = (e) => {
        setOrder({...order, City: e.target.textContent})
        e.target.parentElement.parentElement.parentElement.children[0].children[0].value = e.target.textContent
    }
    const openCity = (e) =>{
        ndList.current.classList.toggle("dropDownListActivate")
    }
    const chose = (e) => {
        setOrder({...order, Country: e.target.textContent})
        readOnlyRef.current.children[0].value = e.target.textContent
        for(let i = 0; i < data.data.data.length; i++){
            if(e.target.textContent === data.data.data[i].name){
                
                if(data.data.data[i].states.length === 0){
                    setCity(false)
                }else{
                    setCity(data.data.data[i].states)
                }   
            }
        }
        ListRef.current.classList.toggle("dropDownListActivate")
        cityRef.current.value = ""
        
    }
    const PlaceOrder = () => {
        for(let i in order){
            if(order[i] === ""){
                console.log(i, "is empty")
            }
        }

    }


    return (
        <div className="checkout" ref={checkRef} >
            <div className="loadings" ref={load} >
                <div className="back" ></div>
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            <div className="checkout-body">
                <div className="checkout-wrapper">
                    <div className="checkout-head" >
                        <h1>Checkout</h1>
                        <div className="checkout-head-path" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> <Link to="/Home/Cart" >Cart</Link> <span class="material-symbols-outlined">chevron_right</span> <Link>Checkout</Link></div>
                    </div>
                    <div className="open-copon" >Have a coupon? <span onClick={toggleCoupon} >Click here to enter your code</span></div>
                    <div className="copon-add" ref={CouponRef} >
                        <span>If you have a coupon code, please apply it below.</span>
                        <div className="coupon-inp" >
                            <div><input type="text" ref={copoRef} placeholder="Coupon code" /></div>
                            <div className="but" onClick={discountFire}  ><button>Apply coupon</button></div>
                        </div>
                    </div>
                </div>
                <h1>Billing details</h1>
                <div className="input-sheet" >
                    <div className="checkout-inputs" >
                        <div className="checkout-inputs-wrapper">
                            <div className="checkout-inputs-names" >
                                <div className="checkout-input-div-name" >
                                    <div>First name</div>
                                    <input onInput={ (e) =>  setOrder({...order, fName: e.target.value})} type="text" />
                                </div>
                                <div className="checkout-input-div-name" >
                                    <div>Last name</div>
                                    <input type="text" onInput={(e) => setOrder({...order, lName: e.target.value}) }  />
                                </div>
                            </div>
                            <div className="company" >
                                <div>Company name (optional)</div>
                                <input type="text" onInput={(e) => setOrder({...order, Company: e.target.value}) }  />
                            </div>
                            <div className="cuntry" >
                                <div>Country / Region</div>
                                {
                                    api 
                                    && 
                                <div className="Select drop"  >
                                    <div className="readOnly drop" ref={readOnlyRef} onClick={toggleList}  >
                                        <input  type="text"   className="in drop"  readOnly placeholder="Select"  />
                                        <span class="material-symbols-outlined drop listDrop ">arrow_drop_down</span>
                                    </div>
                                    <div className="content drop" ref={ListRef} >
                                        <div className="search drop" onChange={(e) => setSearch(e.target.value)}  >
                                            <input type="text" placeholder="Search" className="sec drop" />
                                        </div>
                                        <ul onClick={chose} className="u drop" >
                                            {data.data.data.filter(country => search === "" ? country : country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ).map((obj, i) => <li key={i} className="li drop" >{obj.name}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                }
                            </div>
                            {
                            city 
                            ?
                            <div className="city" >
                                <div>Town / City</div>
                                {
                                    api
                                    &&
                                <div className="Select drop" onClick={openCity} >
                                    <div className="readOnly drop"   >
                                        <input  type="text" ref={cityRef}   className="in drop"  readOnly placeholder="Select"  />
                                        <span class="material-symbols-outlined drop listDrop ">arrow_drop_down</span>
                                    </div>
                                    <div className="content drop"  ref={ndList}  >
                                        <div className="search drop" onChange={(e) => setSearchCity(e.target.value)}   >
                                            <input type="text" placeholder="Search" className="sec drop" />
                                        </div>
                                        <ul  className="u drop" onClick={choseCity}  >
                                            {city.filter(city => searchCity === "" ? city : city.name.toLocaleLowerCase().includes(searchCity.toLocaleLowerCase()) ).map((obj, i) => <li key={i} className="li drop" >{obj.name}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                }
                            </div>
                            :
                            <div className="company" >
                                <div>Town / City</div>
                                <input onInput={(e) => setOrder({...order, City:e.target.value})} type="text" />
                            </div>
                            }
                            <div className="street flexDiv"  >
                                <div>Street address</div>
                                <input onInput={(e) => setOrder({...order,  streetAdress:{...order.streetAdress, HouseNum: e.target.value }  }) } className="placeAni" placeholder="House number and street name" type="text" />
                            </div>
                        <   div className="flexDiv"  >
                                <input onInput={(e) => setOrder({...order,  streetAdress:{...order.streetAdress, apartment: e.target.value }  }) } className="placeAni" placeholder="Apartment, suite, unit, etc. (optional)" type="text" />
                            </div>
                            <div className="flexDiv"  >
                                <div>Postcode / ZIP</div>
                                <input onInput={(e) => setOrder({...order, postCode:e.target.value})} className="placeAni"  type="text" />
                            </div>
                            <div className="flexDiv"  >
                                <div>Phone</div>
                                <input onInput={(e) => setOrder({...order, Phone:e.target.value})} className="placeAni"  type="text" />
                            </div>
                            <div className="flexDiv"  >
                                <div>Email address</div>
                                <input onInput={(e) => setOrder({...order, Email:e.target.value})} className="placeAni"  type="text" />
                            </div>
                            <h1>Additional information</h1>
                            <span>Order notes (optional)</span>
                            <textarea onInput={(e) => setOrder({...order, additionalInformation:e.target.value})} placeholder="Notes about your order, e.g. special notes for delivery." className="additional" name=""  id="" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="checkout-sheet" >
                        <h2>YOUR ORDER</h2>
                        <div className="sheet-title" >
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>
                        {
                            cartProducts.length !== 0 ? 
                            cartProducts.map(pro => {
                                return (
                                <div className="product-price" >
                                        <p className="product-name" >{  pro.Name}<span class="material-symbols-outlined">close</span><span>{pro.count}</span></p>
                                        <span>${Math.trunc(pro.count * pro.CurrentPrice)}</span>
                                </div>
                                )
                            })
                            :
                            ""
                        }
                        {
                            CoponsOnFire !== null 
                            ?
                            <div className="dis" >
                                <span>Discount</span>
                                <span>- ${CoponsOnFire.value}</span>
                            </div>
                            :
                            ""
                        }
                        <div className="totalOfSheet" >
                            <span>TOTAL</span>
                            <span>${total}</span>
                        </div>
                        <div className="paymentMethods"  >
                            <div className="radio-parend" >
                                <input type="radio" name="payment" id="paymentMethod-one"  onChange={radioClick} value={"Direct bank transfer"} />
                                <label htmlFor="paymentMethod-one">Direct bank transfer</label>
                            </div>
                            <div className="payment-description" ref={radioOne} >
                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            </div>
                            <div>
                                <div className="radio-parend" >
                                    <input type="radio" name="payment" id="paymentMethod-two"  value={"Check payments"} onChange={radioClick} />
                                    <label htmlFor="paymentMethod-two">Check payments</label>
                                </div>
                                <div className="payment-description" ref={radioTwo} >
                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                </div>
                            </div>
                            <div>
                                <div className="radio-parend" >
                                    <input type="radio" name="payment" id="paymentMethod-three"  value={"Cash on delivery"} onChange={radioClick} />
                                    <label htmlFor="paymentMethod-three">Cash on delivery</label>
                                </div>
                                <div className="payment-description" ref={radioThree} >
                                    <p>Pay with cash upon delivery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="notic">
                            <p>
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                            </p>
                            <p><Link>privacy policy.</Link></p>
                        </div>
                        <button className="placeorder" onClick={PlaceOrder} ><Link>Place order</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  memo(CheckOut)