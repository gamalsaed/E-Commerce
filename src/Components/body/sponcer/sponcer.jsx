
import "../../../SASS/sponcer/sponcer.css"

const Sponcer = () => {
    return (
        <div className="sponcer" >
            <div className="sponcer-Wrapper" >
                <div className="left-side" >
                    <div className="bigSale">BIG SALE</div>
                    <div className="offerPer" >
                        <div className="Percentage" >GET $50 OFF</div>
                        <div className="productSale" >ON SELECT APPLE PRODUCTS</div>
                    </div>
                </div>
                <img className="sponcer-img" src="https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/h1-img6.png" alt="" />
                <div className="promo" >
                    <div className="promoCode" >USE CODE: SUMMER50</div>
                    <div className="promoValue" >*Valid once per user on a minimum spend of $200</div>
                </div>
            </div>
        </div>
    )
}
export default Sponcer