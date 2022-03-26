import React, { useEffect, useState } from 'react';

const Cart = ({ cart }) => {
    const [select, setSelect] = useState([]);
    const [choosed, setChoosed] = useState([]);
    // console.log(cart);
    let selectedProducts = '';
    let a = 0;
    useEffect(() => {
        cart.forEach(product => {
            selectedProducts = selectedProducts + product.name + ',';

        });
        setSelect(selectedProducts);
    }, [cart]);



    let name = '';
    const ChoseBestOne = () => {
        selectedProducts = '';
        let best = cart[0].ratings;
        for (const product in cart) {
            if (best < cart[a].ratings) {
                best = cart[a].ratings;
                name = cart[a].name;
            }
            a++;
        }
        setChoosed(name);
    }
    const ChoseAgain = () => {
        setSelect('');

        setChoosed('');
    }

    return (
        <div className='sticky-top'>
            <h2>Selected Cameras: {cart.length}</h2>

            <h1>Name: {select}</h1>
            <h1>Best Product: {choosed}</h1>



            <button type="button " className="btn btn-primary mt-3" onClick={ChoseBestOne}>CHOOSE 1 FOR ME</button><br></br>
            <button type="button " className="btn btn-info m-3" onClick={ChoseAgain}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;