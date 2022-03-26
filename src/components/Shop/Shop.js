import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart);
    }
    return (
        <div className='container'>
            <div className='shop-container  row'>
                {/* Product Section */}
                <div className='products-container row col-md-9'>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                        }
                    </div>

                </div>

                {/* cart section */}
                <div className='cart-container col-md-3 bg-warning '>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;