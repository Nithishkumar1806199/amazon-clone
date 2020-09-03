import React,{useState} from 'react'
import logo2 from '../images/logo2.png'
import {Link,useHistory} from 'react-router-dom'
import './Signin.css'
import {auth} from '../firebase/config'

function Signin(event) {
const history = useHistory()
const [email,setemail]= useState("");
const [password,setpassword]= useState("");

    // logic for Login
const login = (event) => 
{

event.preventDefault(); // prevent refresh page
auth.signInWithEmailAndPassword(email,password).then((auth) =>
{
    //redirect to homepage
    history.push('/');

})
.catch((err)=>{alert(err.message)});
}

    //logic for register
const register = (event) => 
{
event.preventDefault(); // prevent refresh page
auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
    //redirect to homepage
    history.push("/");

}).catch((err)=>{alert(err.message)});
}




    return (
        <div className="Signin d-flex justify-content-center">
              {/* logo */}
            {/*Form Card */}
            <div className="Signin__layer">
            <div className="Signin__Forms">
            <Link className="Links" to="/">
            <img className="Signin__logo " src={logo2} alt="logo"/>
            </Link>
            <h5>Login</h5>
            <form>

            <p>Email</p>
            <input type="email" value ={email} onChange = {event => setemail(event.target.value)} className="Signin__input"/>
            <p>Password</p>
            <input type="password" value ={password} onChange = {event => setpassword(event.target.value)} className="Signin__input"/>
            <button className="Signin__button" onClick ={login} type="submit" >Continue</button>
            <p className="Signin__text2">By continuing, you agree to Amazon's <p className="links">Conditions of Use</p> and<p className="links"> Privacy Notice.</p></p>
            <p className="Signin__text2 links"> Need help ?</p>
            <p  className="Signin__text3">-------New to Amazon-------</p>
            <button className="Signup2__button" onClick={register} >Create a new Account</button>

            <ul className="Sign__Footer">
                <li><p className="Signin__text2 links"> Condition of use</p></li>
                <li><p className="Signin__text2 links" >Privacy Notice</p></li>
                <li><p className="Signin__text2 links"> Need Help</p></li>
            </ul>
            </form>
            </div>
            <p  className="Signin__text4">© 1996-2020, Amazon.com, Inc. or its affiliates</p>
            </div> 
            <div>
            </div>
            </div>
    )
}

export default Signin