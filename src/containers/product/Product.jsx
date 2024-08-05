import React from "react";
import './product.css';
import product from '../../assets/Product.png';

const Product =() =>(
    <div>
        <div className="greenup_product"id="product">
            <img src={product}></img>
            <p>Our team meticulously sorts the textile waste by type and color to prepare it for recycling.
The recycled textiles are then exported to foreign markets where they are transformed into usable products.
Our primary goal is to minimize the accumulation of unwanted fabric in landfills or incinerators.</p>
            </div>
    </div>

);
export default Product;