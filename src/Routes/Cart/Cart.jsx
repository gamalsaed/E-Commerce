
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import "../../Routes Styling/CartComponent/Cart.css"
import { discount } from "../../ProductsSlice/productsSlice"
import { removeFromCart } from "../../ProductsSlice/productsSlice"
const Cart = () => {
    const dispatch = useDispatch()
        let coponRef = useRef()
        let warringRef = useRef()
        let [disco, setDiscount] = useState()
        const {cartProducts, TotalCost, Copons, total, CoponsOnFire} = useSelector(state => state.Products)
        const remove = (produc) => {
            dispatch(removeFromCart(produc))
        }
        const CoponValidation = () => {
            if(CoponsOnFire === null){
            for(let i = 0; i < Copons.length; i++){
                if(Copons[i].copon === coponRef.current.value){
                    console.log(Copons[i].value, TotalCost)
                    if(TotalCost > Copons[i].value){
                        warringRef.current.style.display = "block"
                        warringRef.current.style.background = "#0f834d"
                        warringRef.current.textContent = "Your copon has been added"
                        dispatch(discount(Copons[i]))
                        setDiscount(Copons[i])
                    }else{
                        warringRef.current.style.display = "block"
                        warringRef.current.style.background = "#e2401c"
                        warringRef.current.textContent = `Something went wrong!`
                    }
                }
                else{
                    warringRef.current.style.display = "block"
                    warringRef.current.style.background = "#e2401c"
                    warringRef.current.textContent = `Copon "${coponRef.current.value}" does not exis!t`
                }
            }
            coponRef.current.value = ""
            setTimeout(() => {
                warringRef.current.style.display = "none"
            }, 4000)
        }else{            
            warringRef.current.style.display = "block"
            warringRef.current.style.background = "#e2401c"
            warringRef.current.textContent = `Copon has been already added`
            setTimeout(() => {
                warringRef.current.style.display = "none"
            }, 4000)
        }
        }
        return (
            <div className="Cart-Componenet-wrapper" >
                <div className="Cart-Component" >
                    <div className="Cart-head" >
                        <h1>Cart</h1>
                        <div className="Cart-head-path" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> <Link>Cart</Link></div>
                    </div>
                    <div className="copon-warring" ref={warringRef} >no</div>
                    {cartProducts.length === 0

                    ? 
                    <div className="empty" >
                        <span class="material-symbols-outlined emptyCart ">add_shopping_cart</span>
                        <span>Your cart is currently empty.</span>
                        <Link to="/Home/Shop/Shopping"> <button>Return to shop</button></Link>
                    </div>
                    
                    : 
                        <div className="Cart-Body" >

                            <div className="table-copon" >

                            <div className="table-parent" >
                                <table className="Cart-Table" >
                                    <thead>
                                        <tr>
                                            <td colSpan={3} className="pro" >PRODUCT</td>
                                            <td>PRICE</td>
                                            <td>QUANTITY</td>
                                            <td>SUBTOTAL</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartProducts.map(product => {
                                            let total = Math.ceil(product.CurrentPrice * product.count)
                                            return (
                                                <tr>
                                                    <td className="delete-Item"  ><span onClick={() => remove(product)} class="material-symbols-outlined close ">close</span></td>
                                                    <td className="Cart-Img" ><Link to={`/Card/${product.Name}`} ><img src={product.Img} alt="" /></Link></td>
                                                    <td className="Cart-product-name" ><span><Link to={`/Card/${product.Name}`} >{product.Name}</Link></span></td>
                                                    <td>${product.CurrentPrice}</td>
                                                    <td>{product.count}</td>
                                                    <td>${total}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                                <div className="copon-wrapper" >
                                    <div className="copon" >
                                        <div>
                                            <input type="text" ref={coponRef} placeholder="Coupon code" />
                                        </div>
                                        <div onClick={CoponValidation} >
                                            <input type="button"  value="Apply coupon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="totals-parent-wrapper" >
                                <div className="totals-parent">
                                    <div className="totals-parent-head">    
                                        <h1>CART TOTALS</h1>
                                    </div>
                                    <div className="totals-parent-body">
                                        <div className="st total" >
                                            <div>Subtotal</div>
                                            <div>${TotalCost}</div>
                                        </div>
                                        {total !== TotalCost ? <div className="discount nd" ><div>discount</div><div>${CoponsOnFire.value}</div></div> : ""}
                                        <div className="nd total" >
                                            <div>Total</div>
                                            <div className="ndTotal" >${total}</div>
                                        </div>
                                        
                                    </div>
                                    <div className="totals-parent-foot">
                                        <Link to="/Home/Cart/Checkout" >
                                            <button>Proceed to checkout</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
    )

}

export default Cart