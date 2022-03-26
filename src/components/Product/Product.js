import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, seller, price, img, ratings } = props.product;
    const { handleAddToCart } = props;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4>${price}</h4>
                        <p className="card-text">Barand: {seller}</p>
                        {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
                    </div>
                    <div className="">
                        <button type="button" onClick={() => handleAddToCart(props.product)} className="btn btn-warning w-100 d-flex align-items-center justify-content-center">Add to Cart<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;