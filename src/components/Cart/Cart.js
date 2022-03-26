import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    let selectedProducts = '';

    cart.forEach(product => {
        selectedProducts = selectedProducts + product.name + ',';
    });

    return (
        <div className='sticky-top'>
            <h2>Selected Cameras: {cart.length}</h2>

            <h1>Name: {selectedProducts}</h1>



            <button type="button " className="btn btn-primary mt-3">CHOOSE 1 FOR ME</button><br></br>
            <button type="button " className="btn btn-info m-3">CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;