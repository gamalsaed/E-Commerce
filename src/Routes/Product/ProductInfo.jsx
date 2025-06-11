import { useState } from "react"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComment } from "../../ProductsSlice/productsSlice"
const ProductInfo = ({product}) => {
    const {Products} = useSelector(state => state.Products)
    const infoRef = useRef()
    const starRef = useRef()
    const starsss = [1, 2, 3, 4, 5]
    const dispatch = useDispatch()
            // stars Setting
    let [stars, setStars] = useState()
    const [childsState, setChilds] = useState()
    const [IsStarWork, setIsStarWork] = useState(true)
    const [comments, setComments] = useState(product.comments)
    const hover = (e) =>{
        setChilds(starRef.current.children)        
        for(let i = 0; i < childsState.length; i++){
            if(childsState[i] === e.target && e.target !== e.currentTarget){
                setStars(i)
            }
        }
    }   
    const changeStar = () => {
        setIsStarWork(prev => !prev)
    }
    const starLeave = () => {
        if(IsStarWork){
            for(let i = 0 ; i < childsState.length; i++){
                childsState[i].classList.add("gery")
            } 
        }
    }
    useEffect(() => {
        if(IsStarWork){

            for(let i = 0; i <= stars; i++){
                childsState[i].classList.add("fillMain")
                childsState[i].classList.remove("gery")
            }
            for(let i = 0 ; i < 5; i++){
                if( i > stars ){
                    childsState[i].classList.add("gery")
                    childsState[i].classList.remove("fillMain")
                }
            }
        }
            
        }, [stars])
                // end of stars setting
        const activeComp = (e) =>{
            const Navchild = Array.from(e.currentTarget.children)
            
            if(e.target !== e.currentTarget){
            Navchild.forEach(ele => {
                ele.classList.remove("active-component")
            })
            e.target.classList.add("active-component")
        }
        let indexOfActive = Navchild.findIndex(ele => ele.className === "active-component")
        const infoChild = Array.from(infoRef.current.children)
        infoChild.forEach(ele => {
            ele.classList.remove("activeInfo")
        })
        infoChild[indexOfActive].classList.add("activeInfo")
    }
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const CommentRef = useRef()
    const NameRef = useRef()
    useEffect(() =>{
        setComments(product.comments)
    },[Products[product.Id]])
    const submitComment = (e) =>{
        e.target.style.opacity = "0.5"
        setTimeout(() => {
            if(CommentRef.current.value !== "" && NameRef.current.value !== "" && typeof stars === typeof Number())
            dispatch(addComment({commentDet: {name: NameRef.current.value, rate: stars + 1, date: today, comment: CommentRef.current.value}, product: product}))
            
            e.target.style.opacity = "1"
            CommentRef.current.value = ""
            NameRef.current.value = ""

            for(let i = 0 ; i < childsState.length; i++){
                childsState[i].classList.add("gery")
            } 
            setIsStarWork(prev => !prev)
        }, 2000)
    }
    return (
        <div className="information" >
            <div className="information-Wrapper" >
                <ul className="information-nav" onClick={activeComp} >
                    <li className="active-component" >Description</li>

                    {product.AdditionalInformation ? <li>Additional information</li> : ""}
                    <li>Reviews</li>
                </ul>
                <div className="information-content" ref={infoRef} >
                    <div className="information-Description activeInfo" >
                        {product.description.map(ind => <p>{ind}</p>)}
                    </div>
                        {product.AdditionalInformation ? <div className="information-Additional" >
                    <table>
                        <tr>
                            <td>Weight</td>
                            <td>{product.AdditionalInformation.Weight}</td>
                        </tr>
                        <tr>
                            <td>Dimensions</td>
                            <td>{product.AdditionalInformation.Dimensions}</td>
                        </tr>
                    </table>
                    </div> : ""}
                    <div className="information-Review" >
                        <div className="comments">
                            { Products[product.Id].comments.length > 0  ? Products[product.Id].comments.map(comm => {
                                return (

                            <div className="comment">
                                <div className="image" >
                                    <img src={comm.photo} alt="" />
                                </div>
                                <div className="bodyOfComment" >
                                    <div className="rate">
                                        {starsss.map((star, i) => comm.rate >= star ? <span class="material-symbols-outlined fillGreen ">star</span> : <span class="material-symbols-outlined">star</span> )}
                                    </div>
                                    <div className="Comment-name-date" >
                                        <span className="Comment-name" >
                                            {comm.name} 
                                        </span>
                                        <span className="Comment-date" >{comm.date}</span>
                                    </div>
                                    <p className="comment-para" >{comm.comment}</p>
                                </div>
                            </div>
                                )
                            }) : <h2 className="firstComment" >Be First Comment</h2>}
                        </div>
                        <div className="put-comment">
                            <p className="put-head" >Your email address will not be published. Required fields are marked <span className="red" >*</span></p>
                            <div className="rates" >
                                <div className="rates-title" >Your rating <span className="red" >*</span></div>
                                <div className="stars" onMouseOverCapture={hover} onMouseLeave={starLeave} onClick={changeStar} ref={starRef} >
                                    <span class="material-symbols-outlined gery ">star</span>
                                    <span class="material-symbols-outlined gery">star</span>
                                    <span class="material-symbols-outlined gery">star</span>
                                    <span class="material-symbols-outlined gery">star</span>
                                    <span class="material-symbols-outlined gery">star</span>
                                </div>
                            </div>
                            <textarea ref={CommentRef} name="comment" id="comment" placeholder="Your Reviwe" cols="20" rows="20"></textarea>
                            <div className="name-email" >
                                <input ref={NameRef} type="text" className="comment-name" placeholder="Name"  />
                                <input type="email" className="comment-email" placeholder="Email" />
                            </div>
                            <button className="submits" onClick={submitComment} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ProductInfo
