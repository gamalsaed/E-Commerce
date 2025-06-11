
import { Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addUser } from "../../AllUsersSlice/userStorage"
import "./Register.css"
import { useRef, useState } from "react"
import { login } from "../../UserSlice/userSlice"
const Register = () => {

    const Navigate = useNavigate()


    const {users} = useSelector(state => state.userStorage)
    const dispatch = useDispatch()
    const fNameRef = useRef()
    const lNameRef = useRef()
    const EmailRef = useRef()
    const passwordRef = useRef()
    const CPasswordRef = useRef()
    const PhoneRef = useRef()
    const [gender, setGender] = useState("")
    const [emailError, setEmailError] = useState()
    const [emptyError, setEmptyError] = useState()
    const [GenderError, setGenderError] = useState()
    const change = (e) => {
        setGender(e.target.value)
        setGenderError(false)
    }
    const validation = (e) => {
        e.preventDefault()
        const inputs = [fNameRef, lNameRef, EmailRef, passwordRef, CPasswordRef, PhoneRef]
        const Errors = [setEmailError, setEmptyError, setGenderError]
        let accVali = false
        let obj = {
            fName:"",
            lName:"",
            Email:"",
            password:"",
            gender:"",
            Phone:"",
            Photo: "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
        }
        if(passwordRef.current.value !== CPasswordRef.current.value)
            CPasswordRef.current.style.border = "2px solid red"

        let validateInputs = []
        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].current.value === ""){
                inputs[i].current.style.border = "2px solid red" 
                setEmptyError(true)
            }else{
                if(inputs[i].current.className !== "CPassword"){
                    inputs[i].current.style.border = "2px solid #e4e4e4"
                    validateInputs.push(inputs[i])
                }
            }
        }

        if(gender !== ""){
            validateInputs.push(gender)
        }else{
            setGenderError(true)
        }
        if(validateInputs.length === 6){
            console.log("done")
            CPasswordRef.current.value === passwordRef.current.value ? obj.password = passwordRef.current.value :  CPasswordRef.current.style.border = "2px solid red"
            
            for(let i = 0; i < users.length; i++){
                if(EmailRef.current.value.toLowerCase() !== users[i].Email.toLowerCase()){
                    accVali = true
                    setEmailError(false)
                }else{
                    accVali = false
                    setEmailError(true)
                    break;
                }
            }
            
            if( obj.password !== "" && accVali){
                obj.Email = EmailRef.current.value
                console.log(accVali)
                obj.fName = fNameRef.current.value
                obj.lName = lNameRef.current.value
                obj.gender = gender
                obj.Phone = PhoneRef.current.value
                dispatch(addUser(obj))
                inputs.map(inp => inp.current.value = "")
                Errors.map(error => error(""))
                dispatch(login(obj))
                window.scrollY(0)
                Navigate("/")
            }else if(!accVali){
                console.log("this account has been already exit")
                EmailRef.current.style.border = "2px solid red"
            }
        }
    } 
    return (
        <div className="Register" >
            <div className="Register-wrapper" > 
                <div className="checkout-head" >
                    <h1>Sign Up</h1>
                    <div className="checkout-head-path" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> <Link>Sign Up</Link></div>
                </div>
                    {emailError && 
                        <div className="Error-container" >
                            <div className="Error-Validation-Handler" ><b>Error</b>: This Email used before.</div>
                        </div>
                    }
                    {emptyError && 
                        <div className="Error-container" >
                            <div className="Error-Validation-Handler" ><b>Error</b>: The input field is empty.</div>
                        </div>
                    }
                    {GenderError && 
                        <div className="Error-container" >
                            <div className="Error-Validation-Handler" ><b>Error</b>: Add Gender.</div>
                        </div>
                    }
                <div className="Register-body" >
                    <div className="Register-body-wrapper" >
                        <div>
                            <div className="name" >
                                <div className="input-wrapp" >
                                    <span>First Name</span>
                                    <input  className="fName" onFocus={(e) => {
                                        e.target.style.border = "2px solid #e4e4e4"
                                        setEmptyError(prev => false)
                                    }} ref={fNameRef} type="text" />
                                </div>
                                <div className="input-wrapp" >
                                    <span>Last Name</span>
                                    <input  className="lName" onFocus={(e) => {
                                        e.target.style.border = "2px solid #e4e4e4"
                                        setEmptyError(prev => false)
                                    }}  ref={lNameRef} type="text" />
                                </div>
                            </div>
                            <div className="input-wrapp" >
                                <span>Email</span>
                                <input className="Email" onFocus={(e) => {
                                    e.target.style.border = "2px solid #e4e4e4"
                                    setEmailError(prev => false)
                                    setEmptyError(prev => false)
                                }} type="email" ref={EmailRef} name="" id="" />
                            </div>
                            <div className="input-wrapp" >
                                <span>Phone</span>
                                <input onFocus={(e) => {
                                        e.target.style.border = "2px solid #e4e4e4"
                                        setEmptyError(prev => false)
                                    }} ref={PhoneRef} className="Phone" type="text" />
                            </div>
                            <div className="input-wrapp" >
                                <span>Password</span>
                                <input className="password" onFocus={(e) => {
                                    e.target.style.border = "2px solid #e4e4e4"
                                    setEmptyError(prev => false)
                                }} ref={passwordRef}   type="password" name="" id="" />
                                <span class="material-symbols-outlined visibility" onMouseDown={() => passwordRef.current.type = "text"} onMouseUp={() => passwordRef.current.type = "password"} >visibility</span>
                            </div>
                            <div className="input-wrapp" >
                                <span>Confirm Password</span>
                                <input className="CPassword" onFocus={(e) => {
                                    e.target.value === passwordRef.current.value ? e.target.style.border = "2px solid #e4e4e4" :  e.target.style.border = "2px solid red"
                                    setEmptyError(prev => false)
                                }} ref={CPasswordRef} onInput={(e) =>{
                                    if(e.target.value !== passwordRef.current.value && e.target.value !== "")
                                        e.target.style.border = "2px solid red"
                                    else if(e.target.value === "")
                                        e.target.style.border = "2px solid #e4e4e4"
                                    else
                                        e.target.style.border = "2px solid #e4e4e4"

                                }} type="password" name="" id=""  />
                                <span class="material-symbols-outlined visibility " onMouseDown={() => CPasswordRef.current.type = "text"} onMouseUp={() => CPasswordRef.current.type = "password"}>visibility</span>
                            </div>
                            <div className="input-wrapp" >
                                <span>Gender</span>
                                <div className="genders" >
                                    <div>
                                        <input type="radio" onChange={change} value={"Male"} name="gender" id="Male" className="radio" />
                                        <label htmlFor="Male">Male</label>
                                    </div>
                                    <div>
                                        <input type="radio" onChange={change} value={"Female"} name="gender" id="Female" className="radio" />
                                        <label htmlFor="Female">Female</label>
                                    </div>
                                    <div>
                                        <input type="radio" onChange={change} value={"Other"} name="gender" id="Other" className="radio" />
                                        <label htmlFor="Other">Other</label>
                                    </div>
                                </div>
                            </div>
                            <Link onClick={validation} className="sign-up">
                                    Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
