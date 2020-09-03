import React from 'react'

import logo from '../../Components/images/logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStateValue } from '../Dataflow/StateProvider';
import {auth} from '../firebase/config'

function Header() {

    const [{ basket,user }] = useStateValue();
   const login = () =>
    {
         if(user){
             auth.signOut();
         }
    }
    return (
                    // Data Layer
                    <div className="Header">
                    {/* logo */}
                    <Link className="Links" to="/">
                    <img className="Header__logo" src={logo} alt="logo"/>
                    </Link>
                    {/* SearchBar with Search Icon*/}
                    <input type="text" className='Header__SearchBar'/>
                    <button className='Header__SearchBar_Icon'>
                    <SearchIcon style={{ fontSize: 30 }}/>
                    </button>
                    {/* Signin */} 
                    <Link className="Links" to={!user&&"/Signin"}>
                    <div onClick={login} className="Header__Signin">
                    <small className="small">Hello,{user?.email}</small>
                    <strong>{user? "Sign out":"Signin"}</strong>
                    </div>
                    </Link>
                    {/* Orders */}
                    <Link className="Links" to="/Orders">
                    <div className="Header__Signin">
                        <small className="small">Returns</small>
                        <strong>&Orders</strong>
                    </div>
                    </Link>
                    {/* Try Prime */}
                    <Link className="Links" to="/TryPrime">
                    <div className="Header__Signin">
                        <small className="small">Try</small>
                        <strong>Prime</strong>
                    </div>
                    </Link>
                    {/* Checkout */}
                    <Link className="Links" to="/Checkouts">
                    <div className="Header__ShoppingIcon">
                        <ShoppingCartIcon style={{ fontSize: 40 }} />
                        <strong style={{paddingTop: 19}}>Cart</strong>
            <strong style={{paddingTop: 19,paddingLeft:5}} >{basket.length}</strong>
                    </div>
                    </Link>
                </div>
        

   )
}

export default Header





