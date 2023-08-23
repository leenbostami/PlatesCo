import React from "react";
import deleteIcon from '../images/icons/delete.png';

export default function Cart(props) {

   function getTotal(){

     let deliveryCost=0;
     let totalAfterOffer=0;
     let cartCost=0;
  
     totalAfterOffer=getSpecialOfferOnCart('R01');
     deliveryCost=getDeliveryFees(parseFloat(totalAfterOffer));

     if(props.selectedProducts.length>0){
       cartCost= parseFloat(totalAfterOffer) + deliveryCost;
     }
     
    return cartCost.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

   }

    function getDeliveryFees(total){
        let deliveryCost=0;
        switch (true) {
            case total<50:
                deliveryCost=4.95;
                break;
            case total>=50 && total<90:
                  deliveryCost=2.95;
                  break;
            case total>=90:
                  deliveryCost=0;
                  break;
            default:
                break;
        }
        return deliveryCost;
    }

    function getSpecialOfferOnCart(palteCode){

      const specialPlates= props.selectedProducts.filter(c => c.code === palteCode)||[];
      const remaingPlates = props.selectedProducts.filter(c => c.code !== palteCode).map((product) => product.price)||[];

      let totalSpecialPlates=0;
      let totalRemaingPlates=0;
      let totalAfterOffer=0;

      specialPlates?.forEach((element,index) => {
        let firstIndex=index;
        let secondIndex=index+1;
        
        //will not loop in the second index because it's already calculated with the first
        if (index % 2 === 0) {
         if(typeof(specialPlates[secondIndex]) !=='undefined' && specialPlates[secondIndex]!=null){
          totalSpecialPlates=(specialPlates[firstIndex]?.price + specialPlates[secondIndex]?.price/2)
          }
          else{
            totalSpecialPlates= parseFloat(totalSpecialPlates)+element.price
         }
       }
      });
      

      if(remaingPlates.length>0){
         totalRemaingPlates = parseFloat(remaingPlates?.reduce((acc, curr) => acc + curr));
       }

      totalAfterOffer= parseFloat(totalSpecialPlates) + parseFloat(totalRemaingPlates);

      return totalAfterOffer;
    }

   

    function deletePlatebyId(plateId) {
      props.setSelectedProducts(props.selectedProducts.filter((plate) => plate.id !== plateId));
    }

  return (
    <>
    <div className="cart-container">
      {props.selectedProducts.map((element,index) => {
        return(
         <div className="cart-container-item" key={index}>
           <img src={element.img} alt={element.name} className='cart-container-img'></img>
           <div className="cart-container-nameBox">
              <p className='cart-container-name'>{element.name} - {element.code}</p>
            </div>
          <div  onClick={(e) => {deletePlatebyId(element.id)}}>
            <img src={deleteIcon} alt='delete icon' className="deleteIcon"/>
          </div>
         </div>
        )
        })
      }
      <div className='cart-container-total'>
        Total: {getTotal()+'$'}
      </div>
    </div>
    </>
  );
}
