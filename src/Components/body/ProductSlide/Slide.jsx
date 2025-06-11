
import { Swiper, SwiperSlide } from "swiper/react";
import star from "../../../imgs/star_FILL1_wght100_GRAD-25_opsz40.svg"
const Slide = (props) => {
    console.log("props")
    
    let looping = []
    for(let i = 0; i < props.Rate; i++){
        looping.push(i)
    }
    return (
      <div>

    <SwiperSlide>
          <div className="Slide-Card" >
                <div>
                  <img src={props.Img} alt="" />
                </div>
                <div className="Slide-Card-Descreption" >
                  <div className="Slide-Card-Section" >{props.Section}</div>
                  <div className="Slide-Card-Name" >{props.Name}</div>
                <div>
                <div className="stars" >
                    {looping.map(ele => <img src={star} alt="" className="star" />)}
                    <span className="rev" >{looping.length} Review</span>
                </div>
              </div>
              {!props.Sale ? <div className="ProductPrice"><span>${props.CurrentPrice}</span></div> : <div className="ProductPrice"><span className="currentPrice" >${props.CurrentPrice}</span><span className="oldPrice" >${props.oldPrice}</span></div>} 
            </div>
          </div>
    </SwiperSlide>
      </div>
    )
}
export default Slide

