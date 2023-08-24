import React from "react";
import logo from '../images/logo.png';
import cart from '../images/cart.png';

export default function Header(props) {
  
  return (
    <div className="header">
      <img src={logo} alt='logo' className="logo"></img>
      <ul className="header-items">
        <li>Home</li>
        <li>Produts</li>
        <li>About us</li>
      </ul>

      <div className="language">EN</div>
      
      <div className="notification" onClick={(e) => {props.setOpenCart(!props.openCart)}}>
        <img src={cart} alt='cart' className="cart"></img>
        <span className="badge">{props?.selectedProducts?.length}</span>
     </div>

      <hr></hr>
    </div>
  );
}
