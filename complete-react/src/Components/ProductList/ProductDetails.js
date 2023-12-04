import React, {useState} from 'react';
import Button from "./Button";



function ProductDetails(props){
    let badgeClass = 'badge-margin-left-240 badge';
    badgeClass = badgeClass + (props.isAvailable ? ' bg-success' : ' bg-danger');
    
    //let productCount=0;
    let [productCount, updareCount] =useState(0)

function displayfromattedProductCount(){
    return productCount >0 ? productCount: 'Zero';
}

let incrementProductCount=function(){
    // productCount++;
    // console.log(productCount);
    updareCount(++productCount)
}

let decrementProductCount=function(){
    // productCount--;
    // console.log(productCount);
    updareCount(--productCount)
}
    return(
        <div className="d-flex align-items-center justify-content-start mt-1" >
        <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>{props.price}</h6>
        <Button eventHandler={decrementProductCount}>-</Button>
        <span style={{padding:'0px 20px','font-size': 14}}>
            {displayfromattedProductCount()}
            </span>
        <Button eventHandler={incrementProductCount}>+</Button>
        <span className={badgeClass}>{props.isAvailable ? 'Available':'Unavailable'}</span>
     
      </div>

   )
//    return React.createElement('div',{className:"d-flex align-items-center justify-content-start mt-1"},
//    React.createElement('h6',{className:"font-weight-bold my-2", style:{'margin-right':30}},"$"+props.price),
//     React.createElement(Button , {}, "-"),
//     React.createElement('span',{ style:{padding:'0px 20px','font-size': 14}},displayfromattedProductCount()),
//     React.createElement(Button , {}, "+"),
//     React.createElement('span',{className:{badgeClass}},props.isAvailable ? 'Available':'Unavailable'),
    
//    )
}


export default ProductDetails;