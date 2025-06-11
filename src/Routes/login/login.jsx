import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login } from '../../UserSlice/userSlice'

const Login = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.userStorage)
    // const { Active, Account } = useSelector(state => state.user)
    const usenameRef = useRef()
    const passwordRef = useRef()
    const ErrorRef = useRef()
    const Navigation = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        let user = users.filter(use => {
            return usenameRef.current.value.toLowerCase() === use.Email.toLowerCase() && passwordRef.current.value.toLowerCase() === use.password.toLowerCase()
        })
        if(user.length !== 0){
            window.scrollTo(0, 0)
            dispatch(login(user[0]))
            sessionStorage.setItem("loged", user.Email)
            Navigation("/")
        }else{
            ErrorRef.current.style.display = "block"
            setTimeout(() => {
                ErrorRef.current.style.display = "none"
            }, 20000)
        }
    }

    return (
        <div className="Login-wrapper">
            <div className="Login" >
                <div className="checkout-head" >
                    <h1>My Account</h1>
                    <div className="checkout-head-path" ><Link to="/" className="homePage" >Home page</Link> <span class="material-symbols-outlined">chevron_right</span> <Link to="/Home/Cart" >My Account</Link></div>
                </div>
                <div className="error-wrapper" ref={ErrorRef} >
                    <h3>Error: <span>The password you entered or the username is incorrect</span></h3>
                </div>
                <div className="forms-wrapper" >
                    <div className="forms" >
                        <h1>Login</h1>
                        <form action="post" onSubmit={submit}>
                            <div className="input-div" >
                                <div>Username or email address <span style={{color:"red"}} >*</span></div>
                                <input ref={usenameRef} type="text" placeholder="Enter your username or email address..." />
                            </div>
                            <div className="input-div" >
                                <div>Password <span style={{color:"red"}} >*</span></div>
                                <input ref={passwordRef} type="password" placeholder="Enter your Password..." />
                            </div>
                            <div className="remember-lost" >
                                <div className="remember" >
                                    <input type="checkbox"  id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <div className="lost-password" >Lost your password?</div>
                            </div>
                            <input type="submit" value="Login" className="form-submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login