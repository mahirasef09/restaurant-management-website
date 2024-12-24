import React from 'react';
import { Link } from 'react-router-dom';

const AllFoodsCard = ({product}) => {
    const {_id, image, category, name, description, quantity, price, purchaseCount} = product;
    return (
        <div>
            <div className="card bg-gray-100 w-80 h-[500px] shadow-xl p-3">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-none" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold">{category}!</h2>
                    <p><span className="font-bold">Name:</span> {name}</p>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <p><span className="font-bold">Quantity:</span> {quantity}</p>
                    <p><span className="font-bold">Price:</span> ${price}</p>
                    <p><span className="font-bold">Purchase Number:</span> {purchaseCount}</p>
                    <div className="card-actions">
                        <div className="space-x-3">
                            <Link to={`/singleFood/${_id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodsCard;