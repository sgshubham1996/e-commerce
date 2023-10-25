import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {

    const[menu,setMenu]=useState("shop");
    const{getTotalCartItem}=useContext(ShopContext)

    function handleMenuShop(){
        setMenu("shop")
    }
    function handleMenuMen(){
        setMenu("mens")
    }
    function handleMenuWomen(){
        setMenu("womens")
    }
    function handleMenuKids(){
        setMenu("kids")
    }

  return (
    <div className='navbar' >
        <div className="nav-logo">
            <img src={logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={handleMenuShop} ><Link to="/" >Shop</Link>{menu==="shop" ? <hr />: null} </li>
            <li onClick={handleMenuMen} ><Link to="/mens" >Men</Link>{menu==="mens" ? <hr />: null} </li>
            <li onClick={handleMenuWomen} ><Link to="/womens" >Women</Link>{menu==="womens" ? <hr />: null} </li>
            <li onClick={handleMenuKids} ><Link to="/kids" >Kids</Link>{menu==="kids" ? <hr />: null}  </li>
        </ul>
        <div className="nav-logo-cart">
            <Link to="/login" ><button>Login</button></Link> 
            <Link to="/cart" ><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar