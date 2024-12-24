import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "./PageTitle";

const SingleFood = () => {
    const product = useLoaderData();
    const { _id, image, category, name, description, quantity, price, adderName, adderEmail, purchaseCount } = product;

    return (
        <div>
            <PageTitle title="MahirRestaurant | View Details"></PageTitle>
            <div className="card card-side bg-base-100 shadow-xl my-5">
                    <figure>
                        <img
                            src={image}
                            alt="Movie"
                            className='md:w-96 h-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold">{category}!</h2>
                        <p><span className="font-bold">Name:</span> {name}</p>
                        <p><span className="font-bold">Description:</span> {description}</p>
                        <p><span className="font-bold">Quantity:</span> {quantity}</p>
                        <p><span className="font-bold">Price:</span> ${price}</p>
                        <p><span className="font-bold">Added by:</span> {adderName}</p>
                        <p><span className="font-bold">Email of the person who added:</span> {adderEmail}</p>
                        <p><span className="font-bold">Purchase Number:</span> {purchaseCount}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/foodPurchase/${_id}`}>
                                <button className="btn btn-primary">Purchase</button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SingleFood;