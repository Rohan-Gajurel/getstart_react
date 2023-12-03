//let image =require("../images/fresh-milk.png")
let productCount= 0;

//let isAvailable='Unavailable';
//Lc 14 error

// let style={
//     padding:'0px 20px',
//     'font-size': 14
// }

function displayfromattedProductCount(){
    return productCount >0 ? productCount: 'Zero';
}

function Products(props){
    let badgeClass = 'badge-margin-left-240 badge';
    badgeClass = badgeClass + (props.isAvailable ? ' bg-success' : ' bg-danger');
    
    return(<ul class="list-group shadow">
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.pnmae}</h5>
          <p className="font-italic text-muted mb-0 small">{props.description}</p>
          <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>{props.price}</h6>
            <button className="btn btn-primary">-</button>
            <span style={{padding:'0px 20px','font-size': 14}}>
                {displayfromattedProductCount()}
                </span>
            <button className="btn btn-primary">+</button>
            <span className={badgeClass}>{props.isAvailable ? 'Available':'Unavailable'}</span>
          </div>
        </div><img src={(props.imageUrl)} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
        </div>
    </li>
</ul> )
}

export default Products;
