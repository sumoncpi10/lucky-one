import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
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
                <div className='cart-container col-md-3 '>
                    <h2>Selected Cameras: {cart.length}</h2>
                    <h1>Name: {cart.name}</h1>
                    <button type="button " className="btn btn-primary mt-3">CHOOSE 1 FOR ME</button><br></br>
                    <button type="button " className="btn btn-info m-3">CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;