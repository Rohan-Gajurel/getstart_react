import { useState } from 'react';
import './App.css'
import CreateProduct from './Components/CreateProduct/CreateProduct';
import ProductList from './Components/ProductList/ProductList';



function App(){
let [newProduct, updateProduct]=useState(null)
function createProduct(product){
    updateProduct(product);
}

return <div>
    <CreateProduct createProduct={createProduct}></CreateProduct>
    <ProductList newProduct={newProduct}></ProductList>
</div>
}

export default App;