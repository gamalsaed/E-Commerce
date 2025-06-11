import '../../SASS/Header/Header.css'
import { Link } from 'react-router-dom'
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import  DE  from 'country-flag-icons/react/3x2/DE'
import  IT  from 'country-flag-icons/react/3x2/IT'
import  IN  from 'country-flag-icons/react/3x2/IN'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, removeFromWhiteList, addToCart } from '../../ProductsSlice/productsSlice'
import { login } from '../../UserSlice/userSlice'
const Header = () => {
    const dispatch = useDispatch()
    const { Active, Account } = useSelector(state => state.user)
    const { users } = useSelector(state => state.userStorage)
    const userNameRef = useRef()
    const passwordRef = useRef()
    const valiRef = useRef()
    useLayoutEffect(() => {
        if(sessionStorage.getItem("loged")){
            console.log(sessionStorage.getItem("loged"))
            let user = users.filter(use => use.Email === sessionStorage.getItem("loged"))
            dispatch(login(user[0]))
        }
    }, [])

    const loginFun = () => {
        let user = users.filter(use => use.Email.toLowerCase() === userNameRef.current.value.toLowerCase())[0]
        if(user){

            if(passwordRef.current.value === user.password){
                console.log(user)
                dispatch(login(user))
                sessionStorage.setItem("loged", user.Email)
                closeFix()
            }
            else if(passwordRef.current.value !== user.password){
                valiRef.current.classList.remove("validaNone")
                valiRef.current.classList.add("validaBlock")
            }
        }else{       
            valiRef.current.classList.remove("validaNone")
            valiRef.current.classList.add("validaBlock")
            setTimeout(() => {
                valiRef.current.classList.remove("validaBlock")
                valiRef.current.classList.add("validaNone")
            }, 2000)     
        }
    } 



    const whiteListCartRef = useRef()
    const footerMassageRef = useRef()
    const MainMenuRef = useRef()
    const shopBycategories = useRef()
    const mainRef = useRef()
    const filterRef = useRef()
    const catiRef = useRef()
    const menuRef = useRef()
    const listRef = useRef()
    const shoppingRef = useRef()
    const ResponsiveListRef = useRef()
    const cartSlideRef = useRef()
    const Person = useRef()
    const searchFixedRef = useRef()
    let {cartProducts, whiteList, TotalCost, newWhiteListProduct, CartCount, countCart} = useSelector(state => state.Products)
    let [cartLength, setCartLength] = useState()
    let [whiteLength, setWhiteLength] = useState()
    const whitRef = useRef()
    const deleteItemFromWhiteList = (e, product) => {
        e.target.style.transform = "rotate(1080deg)"
        setWhiteLength(whiteList.length)
        setTimeout(() => {
            dispatch(removeFromWhiteList(product))
        }, 3000)
    }
    const addToCartFromWhiteList = (e ,prod) => {
        e.target.style.opacity = ".5"
        setTimeout(() => {
            e.target.style.opacity = "1"
        }, 2000)
        dispatch(addToCart({product: prod, count: 1}))
    }
    const closeWhiteList = (e) => {
        if(e.target.className === "whiteList" || e.target.classList[1] ===  "whiteListClose-Icon"){
            ResponsiveListRef.current.style.left = '-457px'
            cartSlideRef.current.style.right = "-340px"
            filterRef.current.style.display = 'none'
            filterRef.current.style.opacity = '0'
            searchFixedRef.current.style.top = "-140px"
            whitRef.current.style.display = "none"
        }
    }
    useEffect(() => {
        if(whiteList.length > whiteLength){
            whiteListCartRef.current.style.transition = "0.8s"
            whiteListCartRef.current.style.opacity = "0"
            whiteListCartRef.current.style.transform = "translateY(-100px)"
            setTimeout(() => {
                whiteListCartRef.current.style.transition = "0.3s"
                whiteListCartRef.current.style.opacity = "1"
                whiteListCartRef.current.style.transform = "translateY(0)"
            }, 50)
            filterRef.current.style.display = 'block'
            whitRef.current.style.display = "flex"
            filterRef.current.style.opacity = '0.6'
            footerMassageRef.current.style.opacity = "1"
            footerMassageRef.current.style.bottom = "0px"
            setTimeout(() => {
                footerMassageRef.current.style.opacity = "0"
                footerMassageRef.current.style.bottom = "-60px"
            }, 1500)

        }
        setWhiteLength(whiteList.length)
    }, [whiteList])
    useEffect(() => {
        setTimeout(() => {
            if(CartCount !== 0){
                filterRef.current.style.display = 'block'
                filterRef.current.style.opacity = '0.6'
                cartSlideRef.current.style.right = "0"
            }
    }, 2000)
    }, [CartCount])

   
    const RouteMenu = (e) => {
       if(e.target.className === "shopBycategories"){
            shopBycategories.current.style.display = "flex"
            MainMenuRef.current.style.display = "none"
       }else if(e.target.className === "main"){
        MainMenuRef.current.style.display = "flex"
        shopBycategories.current.style.display = "none"
       }
    }
    const listFade = () => {
        listRef.current.style.display = 'block'
    }
    const listHide = () => {
        listRef.current.style.display = 'none'
    }
    const menuEnter = () => {
        menuRef.current.style.width = "13px"
        shoppingRef.current.style.display = "flex"
    }
    const menuLeave =() => {
        menuRef.current.style.width = "10px"
        shoppingRef.current.style.display = "none"
    } 
    const openList = () => {
        ResponsiveListRef.current.style.left = '0'
        filterRef.current.style.display = 'block'
        filterRef.current.style.opacity = '0.6'
        
    }
    const closeList = () => {
        if(whiteListCartRef.current.style.transform !== "translateY(-100px)"){

            ResponsiveListRef.current.style.left = '-457px'
            filterRef.current.style.display = 'none'
            filterRef.current.style.opacity = '0'
        }
    }
    const closeFix = () => {
        ResponsiveListRef.current.style.left = '-457px'
        cartSlideRef.current.style.right = "-340px"
        filterRef.current.style.display = 'none'
        filterRef.current.style.opacity = '0'
        searchFixedRef.current.style.top = "-140px"
        whitRef.current.style.display = "none"
        Person.current.classList.remove("activate")
    }
    const scale = (e) => {
        if(e.target.className === 'main'){
            mainRef.current.style.transform = 'scale(0)'
            catiRef.current.style.transform = 'scale(0.6)'
        }else{
            catiRef.current.style.transform = 'scale(0)'
            mainRef.current.style.transform = 'scale(0.6)'
        }
    }
    const nestedList = (e) => {
        let elements = Array.from(e.currentTarget.children)
        let nestedArray = []
        let mainArray = []
        for(let i = 0; i < elements.length; i++){
            if(elements[i].classList.value.split(' ')[0] === 'nested' ){
                nestedArray.push(elements[i])
            }else if(elements[i].classList.value.split(' ')[0] !== 'nested' && elements[i].className !== 'line'){
                mainArray.push(elements[i])
            }
        }
        mainArray.pop()

        if(e.target.className !== 'line'){
            if(e.target.className === 'Home' ||  e.target.className === 'Shop'){
                nestedArray[mainArray.indexOf(e.target)].classList.toggle("home")
            }else {
                nestedArray[mainArray.indexOf(e.target)].classList.toggle("blog")
            }
            e.target.children[1].classList.toggle('toggle')
        }
    }

    const ShoppingCartSlideClick = (e) => {
        if(e.target.classList[1] === "shopping_bag"){
            filterRef.current.style.display = 'block'
            filterRef.current.style.opacity = '0.6'
            cartSlideRef.current.style.right = "0"
            Person.current.classList.remove("activate")
        }
        else if(e.target.className === "shopping-cart-close" || "close"){
            cartSlideRef.current.style.right = "-340px"
            filterRef.current.style.display = 'none'
            filterRef.current.style.opacity = '0'
        }
    }
    const removeCart = (product) => {
        dispatch(removeFromCart(product))
    }
    const openLog = (e) => {
            
        Person.current.classList.toggle("activate")
        filterRef.current.style.display = 'block'
        filterRef.current.style.opacity = '0'
    }
    const Logout = () => {
        sessionStorage.clear()
        dispatch(Logout())
    }
    return (
        <header  >
            <div className='Shopping-Slide'  ref={cartSlideRef} >
                <div className="Shopping-Slide-Wrapper">
                    <div className="Shopping-Cart-head">
                        <div className='shopping-title' >SHOPPING CART</div>
                        <div className='shopping-cart-close' onClick={ShoppingCartSlideClick} >
                            <span className='close' >CLOSE</span>
                        </div>
                    </div>
                    <div className='shopping-cart-body' >
                        {cartProducts.length !== 0 ? 
                        <div className='shopping-cart-body-wrapper' >
                            <div className='shopping-cart-products' >
                                {cartProducts.map(product => {
                                    return(
                                        <div className='cart-product' >
                                        <div className="shopping-cart-product-wrapper">
                                        <span class="material-symbols-outlined shopping-cart-product-cancel" onClick={() => removeCart(product)}>close</span>
                                            <div className='shopping-cart-product-firstSection' >
                                                <div className='shopping-cart-img' ><img src={product.Img} alt="" /></div>
                                            </div>
                                            <div className='shopping-cart-details' >
                                                <div className='shopping-cart-product-Name' >{product.Name}</div>
                                                <div className='shopping-cart-price' ><span className='product-count' >{product.count} <small>x </small></span> ${product.CurrentPrice}</div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div> 
                        : <div className='noProducts' >No products in the cart.</div>}
                    </div>
                    {cartProducts.length !== 0 ? 
                    <div className='shopping-cart-footer' >
                        <div className='total' >
                            <div>SUBTOTAL:</div>
                            <div className='totalPrice' >${TotalCost}</div>
                        </div>
                        <Link onClick={closeFix} to="/Home/Cart/" className='viewCart-button' >
                            <button>VIEW CART</button>
                        </Link>
                        <Link onClick={closeFix} className='checkout-button'>
                            <button>CHECKOUT</button>
                        </Link>
                    </div> : ""}
                    
                </div>
            </div>

           <div className='fixed' onClick={closeFix} ref={filterRef} ></div>
            <div className='section-one' >
                <ul className='side-one' >
                    <li><Link>Shipping</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Track Order</Link></li>
                </ul>   
                <ul className='side-two' >
                    <li className='header-offer' ><span class="material-symbols-outlined done">done</span><span>Free 30 day money back guarantee</span></li>
                    <li className='' onMouseLeave={listHide} >
                        <span className='lang' onMouseEnter={listFade}  ><span>{ "English"}</span><span class="material-symbols-outlined">keyboard_arrow_down</span></span>
                        <ul className='list'  ref={listRef} >
                            <li className='lang' style={{zIndex: 2}}  ><span style={{zIndex: 1}} ><DE title="Germany" className="flag-icon"/></span><span>GERMAN</span></li>
                            <li className='lang' style={{zIndex: 2}}  ><span style={{zIndex: 1}} ><IT title="Italy" className="flag-icon"/></span><span>ITALIAN</span></li>
                            <li className='lang' style={{zIndex: 2}}  ><span style={{zIndex: 1}} ><IN title="indian" className="flag-icon"/></span><span>HINDI</span></li>
                            <li><span className='req'>REQUIRES WPML</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='section-two' >
                <div className='section' >
                    <div> <img class="hfe-site-logo-img elementor-animation- lazyloaded" src="https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/07/logo.svg" alt="" data-ll-status="loaded"></img></div>
                    <div className='contact-info' >
                        <div className='cont' >
                            <span>Send us a message</span>
                            <span><Link>support.technocy@example.com</Link></span>
                        </div>
                        <div className='cont' >
                            <span>Need help? Call Us:</span>
                            <span><Link>+84 2500 888 33</Link></span>
                        </div>
                    </div>
                    <div className='shopping-tools' >
                        <div className='tools' >
                            <Link><span class="material-symbols-outlined shopping_bag " onClick={ShoppingCartSlideClick}>shopping_bag</span></Link>{countCart}
                        </div>
                        <div className='tools' ><Link to="/Home/Whitelist" ><span class="material-symbols-outlined">favorite</span></Link>{whiteList.length}</div>
                        <div  className='person' >
                            <Link  >
                                {
                                    !Active
                                    ?
                                    <span onClick={openLog} class="material-symbols-outlined persons">account_circle</span>
                                    :
                                    <div onClick={openLog} className='personal-photo' >
                                        {console.log(Account.information.Photo)}
                                        <img src={Account.information.Photo} />
                                    </div>
                                }
                            </Link>
                            <div className={`person-Card pers ${Active ? "Account" : ""}`} ref={Person} >
                            {!Active
                             ?
                             <div className='person-Card-Wrapper pers' >
                                 <div className='person-Card-head pers' >
                                     <div className='s pers'>Sign in</div>
                                     <div onClick={() => closeFix()} ><Link to={"/Home/Register"}>Create an Account</Link></div>
                                 </div>  
                                 <div className='Error validaNone' ref={valiRef} style={{color:"red", fontWeight:"100"}} ><span style={{fontWeight:"900"}} >Error</span> : The password you entered or the username is incorrect</div>
                                 <div className='person-Card-body pers' >
                                     <div className='person-Card-input pers' >
                                         <div className='s pers' >Username or email <span className='hash pers' >*</span></div>
                                         <input ref={userNameRef} className='input-Card pers' placeholder='Username' type="text" />
                                     </div>
                                     <div className='person-Card-input pers' >
                                         <div className='s pers' >Password <span className='hash pers' >*</span></div>
                                         <input ref={passwordRef} className='input-Card pers' placeholder='password' type="password" />
                                         <span class="material-symbols-outlined visibility" onMouseDown={() => passwordRef.current.type = "text"} onMouseUp={() => passwordRef.current.type = "password"}  > visibility </span>
                                     </div>
                                 </div>
                                 <div className='person-Card-Buttom pers' >
                                     <button className='person-Buttom pers' onClick={loginFun}  >LOGIN</button>
                                 </div>
                                 <div className='person-Card-footer pers' >
                                     <Link className='s pers' >Lost your password?</Link>
                                 </div>
                             </div>
                         :
                         <div >
                            <ul onClick={closeFix} >
                                <Link to={`/Account/Information`} onClick={closeFix} > <span class="material-symbols-outlined"> Person </span> Account</Link>
                                <Link> <span class="material-symbols-outlined"> list_alt </span> Current Orders</Link>
                                <Link> <span class="material-symbols-outlined"> settings </span> Settings</Link>
                                <Link onClick={Logout} > <span class="material-symbols-outlined logout"  > logout </span> Logout</Link>
                            </ul>
                         </div>
                        }
                        </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className='section-three' >
                <div className="last-section">
                    <div className='respo' onClick={openList}  >
                        <span className='res' ></span>
                        <span className='res middle' ></span>
                        <span className='res' ></span>
                    </div>
                    <div className='categories' onMouseEnter={menuEnter} onMouseLeave={menuLeave} >
                        <div className='menu' >
                            <span></span>
                            <span className='sbaba' ref={menuRef} ></span>
                            <span></span>
                        </div>
                        <div>
                            SHOP BY CAREGORIES

                        </div>
                            <ul className='shopping-list' ref={shoppingRef}  >
                                <li className='hidden' ></li>
                                <li>Mobiles</li>
                                <li>Tablets</li>
                                <li>Laptops</li>
                                <li>Televisions</li>
                                <li>Computer & Gaming</li>
                                <li>Waching Machine</li>
                                <li>Air Conditioner</li>
                                <li>Accessories</li>
                            </ul>

                    </div>
                    <div> <img class="hfe-site-logo-img elementor-animation- lazyloaded" src="https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/07/logo.svg" alt="" className='header-logo' data-ll-status="loaded"></img></div>
                        <ul className='service'  >

                            <li><Link to="/" >HOME</Link></li>
                            <li><Link to="/Home/Shop/Shopping" >SHOP</Link></li>
                            <li><Link>BLOG</Link></li>
                            <li><Link>PAGES</Link></li>
                            <li><Link>CONTACT</Link></li>
                            <li><Link>HOT DEALS</Link></li>
                        </ul>
                    <div className='search-div' ><input type="text" placeholder="Search Products..." className='search-products' /><span class="material-symbols-outlined search-icon" >search</span></div>
                    <div className='responsive-bag'><Link><span class="material-symbols-outlined shopping_bag" onClick={ShoppingCartSlideClick} >shopping_bag</span></Link><span className='dynamic-cart' >{countCart}</span></div>
                </div>
                <hr className='lastHr' />
            </div>
            <div className='slide' onClick={RouteMenu} ref={ResponsiveListRef} >
                <div className='slide-head' >
                    <div className='main' onClick={scale}  >Main menu</div>
                    <span className='lineTwo' ref={mainRef} ></span>
                    <div className='shopBycategories' onClick={scale} >Shop by categories</div>
                    <span className='lineOne' ref={catiRef} ></span>
                    <span class="material-symbols-outlined close " onClick={closeList} >close</span>
                </div>
                <ul className='listSlide' ref={MainMenuRef} onClick={nestedList}  >
                    <li className='Home'  >
                        <Link>HOME</Link>
                        <span className='ic' >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </li>
                    <span className='line' ></span>
                    <div className='nested ' >
                        <div>Home 1</div>
                        <div>Home 2</div>
                        <div>Home 3</div>
                        <div>Home 4</div>
                        <div>Home 5</div>
                        <div>Home 6</div>
                    </div>
                    <li className='Shop' >
                        <Link>SHOP</Link>
                        <span className='ic' >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </li>
                    <span className='line' ></span>
                    <div className='nested ' >
                        <div>Home 1</div>
                        <div>Home 2</div>
                        <div>Home 3</div>
                        <div>Home 4</div>
                        <div>Home 5</div>
                        <div>Home 6</div>
                    </div>
                    <li className='Blog'  >
                        <Link>BLOG</Link>
                        <span className='ic' >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </li>
                    <span className='line' ></span>
                    <div className='nested ' >
                        <div>Home 1</div>
                        <div>Home 2</div>
                        <div>Home 3</div>
                    </div>
                    <li className='Pages'  >
                        <Link>PAGES</Link>
                        <span className='ic' >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </li>
                    <span className='line' ></span>
                    <div className='nested ' >
                        <div>Home 1</div>
                        <div>Home 2</div>
                        <div>Home 3</div>
                    </div>
                    <li className='contact' >
                        <Link>CONTACT</Link>
                    </li>
                </ul>
                <ul className='listSlide catego' ref={shopBycategories} >
                    <li>Mobiles</li>
                    <span className='line' ></span>
                    <li>Tablets</li>
                    <span className='line' ></span>
                    <li>Laptops</li>
                    <span className='line' ></span>
                    <li>Televisions</li>
                    <span className='line' ></span>
                    <li>Computer & Gaming</li>
                    <span className='line' ></span>
                    <li>Waching Machine</li>
                    <span className='line' ></span>
                    <li>Air Conditioner</li>
                    <span className='line' ></span>
                    <li>Accessories</li>
                </ul>
                <div className='slide-foot' >
                    {
                        Active ? 
                        <div className='slide-foot-wrapper'>
                            <Link className='logout logout-slide' onClick={() => dispatch(Logout())} ><span class="material-symbols-outlined">logout</span><span style={{color:"black"}} >Logout</span></Link>
                            <Link style={{color:"black"}} ><span class="material-symbols-outlined sett ">settings</span> </Link>
                        </div>
                        : ""
                    }
                    
                </div>
            </div>
            <div className='Fixed-Search' ref={searchFixedRef} >
                <div className='Fiexed-Search-Wrapper' >
                <span class="material-symbols-outlined cancel " onClick={closeFix} >cancel</span>
                    <div className='input' >
                        <div className='input-wrapper' >

                            <input type="text" placeholder='Search Products...' autoComplete='off' />
                            <Link>
                                <span class="material-symbols-outlined search-icon-fixed" >search</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whiteList' onClick={closeWhiteList} ref={whitRef} >
                <div className="whiteListWrapper" ref={whiteListCartRef} >
                    <div className="whiteListHeader">
                        <div className='whiteListHeader-wrapper' >
                            <div className='whiteListCount' >Wishlist ({whiteList.length})</div>
                            <div className='whiteListClose' >
                                <span class="material-symbols-outlined whiteListClose-Icon ">close</span>
                            </div>
                        </div>
                    </div>

                    <div className="whiteListBody">
                        <div className="whiteListBodyWrapper">
                            {whiteList.map(produ => {
                                return (

                            <div className="productWhiteList">
                                <div className="productWhiteListwrapper">
                                    <div onClick={ (e) => deleteItemFromWhiteList(e, produ)}   className='productWhiteList-Close' ><span class="material-symbols-outlined whiteList-Delete " >close</span></div>
                                    <div className='productWhiteList-img' ><img src={produ.Img} alt="" /></div>
                                    <div className='productWhiteList-details' >
                                        <div className='productWhiteList-details-name' >{produ.Name}</div>
                                        { produ.Sale ?  <div className='productWhiteList-details-price' > <span className='prevPrice' >${produ.oldPrice}</span> <span className='currentPrice' >${produ.CurrentPrice}</span> </div> : <div className='productWhiteList-details-price' >{produ.CurrentPrice}</div>}
                                        
                                    </div>
                                    <div onClick={(e) => addToCartFromWhiteList(e ,produ)} className='productWhiteList-addToCart' >
                                        Add to cart
                                    </div>
                                </div>
                            </div>
                                )
                            })}
                        </div>
                     </div>

                    <div className='WLFooter'  >
                        <div className='whiteListFooter' >
                            <Link>OPEN WISHLIST PAGE</Link>
                            <Link>CONTINUE SHOPPING</Link>
                        </div>
                        <div ref={footerMassageRef} className='footerMassage' >{newWhiteListProduct}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header