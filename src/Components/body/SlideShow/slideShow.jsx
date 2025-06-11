// Import FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faMobileButton } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../../../SASS/slideShow/slideShow.css'

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";

// import images 
import imgOne from "../../../imgs/rev_home1.png"
import imgTwo from "../../../imgs/rev_home06.png"


export default function Slider() {
  const [swiper, setSwiper] = useState(null);
  let [active, setActive] = useState(false)
  let eleOneRef = useRef()
  let eleTwoRef = useRef()
  if(active){
        active.childNodes[1].style.transform = "translateX(-70px)"
       
        active.childNodes[0].childNodes.forEach(ele => {
          ele.style.transform = "translateX(50px)"
        })
    if(eleTwoRef.current.classList[1] === "active"){
      eleTwoRef.current.childNodes[0].childNodes.forEach(ele => {
        ele.style.transform = "translateX(0)"
      })
      
    if(swiper.height === 800){
        eleTwoRef.current.childNodes[1].style.transform = "translateX(0px)"
    }else{
        eleTwoRef.current.childNodes[1].style.transform = "translateX(-0px)"
    }
    }else{
      eleTwoRef.current.childNodes[0].childNodes.forEach(ele => {
        ele.style.transform = "translateX(-340px)"
      })
      eleTwoRef.current.childNodes[1].style.transform = "translateX(700px)"
    }
    
    if(eleOneRef.current.classList[1] === "active"){
      // eleOneRef.current.childNodes[1].style.transform = "translateX(-100px)"

      if(swiper.height === 800){
        eleOneRef.current.childNodes[1].style.transform = "translateX(0px)"
      }else{
        eleOneRef.current.childNodes[1].style.transform = "translateX(-100px)"
      }

      eleOneRef.current.childNodes[0].childNodes.forEach(ele => {
        ele.style.transform = "translateX(0)"
      })
    }else{
      eleOneRef.current.childNodes[1].style.transform = "translateX(950px)"
      eleOneRef.current.childNodes[0].childNodes.forEach(ele => {
        ele.style.transform = "translateX(-390px)"
      })
    }


  }

  const [slides, setSlides] = useState()
  return (

    <>
      <Swiper
      
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ 
          delay: 5500,
          disableOnInteraction: true,
        }}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setSlides(swiper.$el[0].childNodes[0].childNodes)
          swiper.$el[0].childNodes[0].childNodes.forEach((ele, i) => {
            if(swiper.$el[0].childNodes[0].childNodes[i] !== swiper.$el[0].childNodes[0].childNodes[swiper.activeIndex]){
              swiper.$el[0].childNodes[0].childNodes[i].childNodes[0].classList.remove("active")
            }
          })
          swiper.$el[0].childNodes[0].childNodes[swiper.activeIndex].childNodes[0].classList.add("active")
          setActive(swiper.$el[0].childNodes[0].childNodes[swiper.activeIndex].childNodes[0])
        }}

        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwipers elswiper"
      >
        <SwiperSlide  >
          
            <div className="Slide" ref={eleOneRef} >
              <div className="texter" >
                <span className="title" >midweek deals</span>
                <span className="detailes" >SMARTPHONES ACCESSORES</span>
                <span className="offer" >Up to 40% off</span> 
                <span className="shop" ><span><Link to="/Home/Shop/Shopping" >Shop Now</Link></span> <span className='ico' ><FontAwesomeIcon icon={faAngleRight} /></span> </span>
              </div>
              <img className='imgOne' src={imgOne}  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="Slide" ref={eleTwoRef} >
              <div className="texter" >
                <span className="title" >midweek deals</span>
                <span className="detailes" >THE GOLD <br/> STANDARD OF TELEVITION</span>
                <span className="offer" >Up to 40% off</span> 
                <span className="shop" ><span><Link to="/Home/Shop/Shopping" >Shop Now</Link></span> <span className='ico' ><FontAwesomeIcon icon={faAngleRight} /></span> </span>
              </div>
              <img className='imgTwo' src={imgTwo} />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}