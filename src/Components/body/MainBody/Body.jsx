import React from "react";
import { useSelector } from "react-redux";

// Styling 
import '../../../SASS/cards/cards.css'
import "../../../SASS/ourfeatcherd/ourFeatcher.css"
import "../../../SASS/MinBody/MainBody.css"
// Componentes
import Slider from "../SlideShow/slideShow"
import Categories from "../Categories/Categories";
import OurFeatcher from "../OurFeatcher/ourFeatcher";
import Sponcer from "../sponcer/sponcer";
import WhoWeAre from "../whoWeAre/whoWeAre";
import Brands from "../brands/brands";

import SlideOne from "../ProductSlide/SlideOne";
import OfferCard from "../offerCard/offerCard";
const Body = () => {


    // if(swiper.height === 800){
    //     eleTwoRef.current.childNodes[1].style.transform = "translateX(0px)"
    // }else{
    //     eleTwoRef.current.childNodes[1].style.transform = "translateX(-60px)"
    // }




    const {Products, categores, showCards} = useSelector(state => state.Products)

    return (
        <div className="body" >
            <div className="parent" >
                <Slider/>
                <div className="cards" >
                    {categores.map((e, i) => <OfferCard Cheight="240" name={e.Name} key={e.Name} type={e.type} background={e.background} mode={e.mode}  />)}
                </div>
            </div>
            <div className="Categories" >
                <Categories/>
            </div>
                <h3>Our Featured Offers</h3>
            <div className="OurFeatchers" >
                
                {Products.map((ele, i) => ele.Featured ? <OurFeatcher key={ele.Name} styling={270} product={ele}/> : "")}
                
            </div>
            <h3>This Week Deals</h3>
            <SlideOne Products={Products}/>
            <div className="OfferDiv" >
                {showCards.map(card => {
                    return <OfferCard name={card.Name} key={card.Name} type={card.type} background={card.background} mode={card.mode}  />
                })}
            </div>
            <h3 className="Top" >Top Selling Items</h3>
            <div className="TopSelling" >
                {Products.map(product => product.TopSelling ?  <OurFeatcher key={product.Img} styling={0} product={product}/> : "" )}
            </div>
            <Sponcer/>
            <div className="who" >

                <WhoWeAre/>
            </div>
            <hr />
            <Brands/>

        </div>
    )
}

export default Body

