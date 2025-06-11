
import "../../Routes Styling/WhiteListComponent/WhiteListComponent.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { removeFromWhiteList, addToCart } from "../../ProductsSlice/productsSlice"
const WhiteList = () => {
    const {whiteList} = useSelector(state => state.Products)
    const dispatch = useDispatch()
    return (
        <>
            <div className="whitelist-Component" >

            <div className="WhiteListParent" >
                <div className="WhiteListParent-header" >
                    <h1>Wishlist</h1>
                    <h4 className="location" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> Wishlist</h4>
                </div>
                {

                   whiteList.length !== 0 ? <table className="whiteListTable" >
                    {whiteList.map(product => {
                        return (
                            <tr>
                                <th className="dele" ><span onClick={() => {
                                    dispatch(removeFromWhiteList(product))
                                }} class="material-symbols-outlined">close</span></th>
                                <th className="white-img-parent" ><img className="white-img" src={product.Img} alt="" /> </th>
                                <th className="Name-PRICE" >
                                    <div className="White-Name" >{product.Name}</div>
                                    <div className="White-price" >
                                        
                                        {product.Sale && product.oldPrice ? <span className="oldPrice" >${product.oldPrice}</span> : ""}    
                                        <span>${product.CurrentPrice}</span>    
                                    </div>
                                </th>
                                <th className="adding-btn" >
                                    <button onClick={(e) => {
                                        dispatch(addToCart({product : product, count: 1}))
                                        e.target.style.transition = ".5s"
                                        e.target.style.opacity = ".5"
                                        setTimeout(() => {
                                            e.target.style.transition = ".5s"
                                            e.target.style.opacity = "1"
                                        }, 2000)
                                    }} >Add to cart  </button>
                                </th>
                            </tr>
                        )
                    })}
                </table> : <h1 className="whiteEmpty" >Whitelist is Empty</h1>
        }
            </div>
        </div>
        </>
    )
}
export default WhiteList