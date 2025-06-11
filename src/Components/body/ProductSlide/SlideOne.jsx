import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Virtual } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import star from "../../../imgs/star_FILL1_wght100_GRAD-25_opsz40.svg"
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../../SASS/SlideOne/SlideOne.css";

// import required modules
import { Navigation } from "swiper";

// SwiperCore.use([Virtual]);
export default function SlideOne(props) {
  const [products, setProducts] = useState(props.Products)
  let {Products} = useSelector(state => state.Products)
  let looping = []
  const scrollTop = () => {
    window.scroll(0)
  }
  Products.map((ele, i) => {
    let newArr = []
    for(let i = 0; i < ele.Rate; i++ ){
      newArr.push(i)
    }
    looping.push(newArr)
  })
  SwiperCore.use([Virtual]);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper-Two"
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        830: {
          width: 830,
          slidesPerView: 2,
        },
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
      }}
      spaceBetween={20}
      >
        {Products.map((prod, i) => {
          if(prod.Slide){

            return (
              <SwiperSlide key={prod.id} >
          <div className="Slide-Card" >
                <div>
                  <Link onClick={scrollTop} to={`/Card/${prod.Name}`} >
                    <img src={prod.Img} alt="" />
                  </Link>
                </div>
                <div className="Slide-Card-Descreption" >
                  <div className="Slide-Card-Section" >{prod.Section}</div>
                  <div className="Slide-Card-Name"  > <Link onClick={scrollTop}  to={`/Card/${prod.Name}`} >{prod.Name}</Link></div>
                <div>
                <div className="stars" >
                    {looping[i].map(ele => <img src={star} alt="" className="star" />)}
                    <span className="rev" >{looping[i].length} Review</span>
                </div>
              </div>
                  {!prod.Sale ? <div className="ProductPrice"><span>${prod.CurrentPrice}</span></div> : <div className="ProductPrice"><span className="currentPrice" >${prod.CurrentPrice}</span><span className="oldPrice" >${prod.oldPrice}</span></div>} 
            </div>
          </div>
    </SwiperSlide>
        )
      }
      })}

      </Swiper>
    </>
    );
  }
  