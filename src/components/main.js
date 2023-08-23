import React,{useState} from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Products from "../components/products";
import Cart from "../components/cart";
import red from '../images/red-plate.png';
import green from '../images/green-plate.png';
import blue from '../images/blue-plate.png';
import salad from '../images/header-salad.png';
import yogurt from '../images/header-yogurt.png';


export default function Main() {

  const [products] = useState([
    {name:'Red Plate',code:'R01',price:32.95,img:red},
    {name:'Green Plate',code:'G01',price:24.95,img:green},
    {name:'Blue Plate',code:'B01',price:7.95,img:blue}
   ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [openCart, setOpenCart] = useState(false);


  return (
    <div className="main">
      <Header selectedProducts={selectedProducts} openCart={openCart} setOpenCart={setOpenCart}/>

      {openCart&&
        <Cart selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
      }

      <div className="header-text">
        <h1 className='welcomeMSG'>Welcome To Plates Co !</h1>
        <img src={salad} className='header-first-img' alt='salad header'/>
        <img src={yogurt} className='header-second-img' alt='yogurt header'/>
        <p className='infoMSG'>Buy one Red plate, get the second half price</p>
        <p className='deliveryMSG'>Get free delivery if your order is above 90$</p>
        <p className='deliveryMSGSmall'>Delivery cost 4.95$ for orders under 50$ </p>
        <p className='deliveryMSGSmall'>Delivery cost 2.95$ for orders under 90$ </p>
        <p className="header-p">Choose your plate</p>
      </div>

      <Products products={products} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}/>
      <Footer />
    </div>
  );
}
