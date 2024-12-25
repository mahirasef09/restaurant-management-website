import { useState } from "react";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyOrders = () => {
    const { user, state } = useContext(AuthContext);
    const [foodData, setFoodData] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {

        // fetch('http://localhost:5000/myOrders')
        //     .then(res => res.json())
        //     .then(data => setFoodData(data))

        axiosSecure.get(`/myOrders/?email=${user?.email}`)
            .then(res => setFoodData(res.data))

    }, [state]);

    return (
        <div>
            <PageTitle title="MahirRestaurant | My Orders"></PageTitle>
            <div>
                {
                    foodData.length == 0 ?
                        <div className="w-full">
                            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">There is No Ordered Items</h2>
                        </div> :
                        <div className="overflow-x-auto">
                            <table className="table table-xs">
                                {/* head */}
                                <thead className="text-black dark:text-white">
                                    <tr>
                                        <th>S/N</th>
                                        <th>Food Image</th>
                                        <th>Food Name</th>
                                        <th>Food Owner</th>
                                        <th>Buying Date & Time</th>
                                        <th>Purchase Quantity</th>
                                        <th>Purchase Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-black dark:text-white">
                                    {/* row 1 */}
                                    {
                                        foodData.map((product, index) => <tr
                                            key={product._id}
                                            className="hover"
                                        >
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={product.image}
                                                                alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.adderName}</td>
                                            <td>{product.buyingDate}</td>
                                            <td>{product.purchaseQuantity}</td>
                                            <td>{product.purchasePrice}</td>
                                            <td>
                                                <Link to={`/singleFood/${product.food_id}`}>
                                                    <button className="btn btn-sm btn-neutral">View Details</button>
                                                </Link>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;