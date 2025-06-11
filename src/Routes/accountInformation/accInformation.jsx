
import { Link, useNavigate  } from "react-router-dom"
import "./accountInformation.css"
import { useDispatch , useSelector } from "react-redux"
import { useState } from "react"
import { saveChanges } from "../../UserSlice/userSlice"
const AccInformation = () => {
    const dispatch = useDispatch()
    const { Account } = useSelector(state => state.user)
    let [disabl, setDiabled] = useState(true)
    let [accInfo, setInfo] = useState(Account)
    let Navigate = useNavigate()
    const Edit = (e) => {
        e.currentTarget.parentElement.children[0].disabled = false
        
    }
    return (
        <div className="Account-Information" >
            <div className="Account-Information-wrapper" >
                <div className="checkout-head" >
                    <h1>Account Information</h1>
                    <div className="checkout-head-path" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> <Link to="/Home/Cart" >Account</Link></div>
                </div>
                <div className="account-information-body" >
                    <div className="name" >
                        <div className="input-wrapp" >
                            <span>First Name</span>
                            <div className="input-dis" >
                                <input  className="fName"  disabled={disabl} value={accInfo.information.FirstName} onInput={(e) => setInfo(prev => {
                                    console.log(e.target.disabled)
                                    return {...accInfo, information: {...prev.information, FirstName: e.target.value}}

                                })}  type="text" />
                                <div onClick={Edit} >
                                    <span class="material-symbols-outlined">edit</span>
                                    <span>Edit</span>
                                </div>
                            </div>
                        </div>
                        <div className="input-wrapp" >
                            <span>Last Name</span>
                            <div className="input-dis" >
                                <input  className="lName" disabled={disabl} value={accInfo.information.LastName} onInput={(e) => setInfo(prev => {
                                    console.log(prev)
                                    return {...accInfo, information: {...prev.information, LastName: e.target.value}}
                                })}  type="text" />
                                <div onClick={Edit} >
                                    <span class="material-symbols-outlined">edit</span>
                                    <span>Edit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-wrapp " >
                        <span>Email</span>
                        <div className="input-dis" >
                            <input type="text" className="inp" disabled={disabl} value={accInfo.information.Email} />
                            <div onClick={Edit} className="edi" >
                                <span class="material-symbols-outlined">edit</span>
                                <span>Edit</span>
                            </div>  
                        </div>
                    </div>
                    <div className="input-wrapp " >
                        <span>Phone Number</span>
                        <div className="input-dis" >
                            <input type="text" className="inp" disabled={disabl} value={accInfo.information.Phone} />
                            <div onClick={Edit} className="edi" >
                                <span class="material-symbols-outlined">edit</span>
                                <span>Edit</span>
                            </div>  
                        </div>
                    </div>
                    <div className="save" onClick={() => {
                        dispatch(saveChanges(accInfo.information))
                        window.location.reload();
                    }} >Save</div>
                </div>
            </div>
        </div>
    )
}

export default AccInformation