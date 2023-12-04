import React from 'react';
import ProductDetails from "./ProductDetails";

//let image =require("../images/fresh-milk.png")


//let isAvailable='Unavailable';
//Lc 14 error

// let style={
//     padding:'0px 20px',
//     'font-size': 14
// }



function Products(props){
   
    return(
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.pnmae}</h5>
          <p className="font-italic text-muted mb-0 small">{props.description}</p>
          <ProductDetails price={props.price} isAvailable={props.isAvailable}></ProductDetails>
        </div><img src={(props.imageUrl)} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
        </div>
    </li>
 )
}

export default Products;
