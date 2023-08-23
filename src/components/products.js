import React from "react";

export default function Products(props) {


  function getProductProprites(code){
    let data = props.products.map((item, index) => ({ ...item, id:Math.random() }));
    return(data.find(p => p.code === code));
  }

   function addToCart(code){
      if(code!==null && code.length>0){
        props.setSelectedProducts([...props.selectedProducts,getProductProprites(code)])
       }
   }
  
  return (
    <div className="products">
      {props.products.map((element,index) => {
        return(
         <div className="product-item" key={index}>
           <img src={element.img} alt={element.name} className='product-img'></img>
           <div className="product-nameBox">
              <p className='product-name'>{element.name} - {element.code}</p>
              <p className='product-ingredients'>Half Chicken, French Fries, Puri Bread and Garlic dip.</p>
           </div>

            <div className="product-priceBox">
             <p className='product-price'>${element.price}</p>
             <button className="product-button"  onClick={(e) => {addToCart(element.code)}}>Add To Cart</button>
            </div>

         </div>
        )
        })
      }
    </div>
  );
}
