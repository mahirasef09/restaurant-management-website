import { useState } from "react";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyOrders = () => {
    const { user, state, setState } = useContext(AuthContext);
    const [foodData, setFoodData] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {

        // fetch('https://restaurant-management-server-flax.vercel.app/myOrders')
        //     .then(res => res.json())
        //     .then(data => setFoodData(data))

        axiosSecure.get(`/myOrders/?email=${user?.email}`)
            .then(res => setFoodData(res.data))

    }, [state]);

    const handleDeletePurchased = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://restaurant-management-server-flax.vercel.app/myOrders/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {

                            // console.log(data);

                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Purchased Food Item has been deleted.",
                                    icon: "success"
                                });
                                setState(!state);
                            }
                        })
                }
            });
    }

    return (
        <div className="min-h-screen">
            <PageTitle title="MahirRestaurant | My Orders"></PageTitle>
            <div className='bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">My Ordered Items</h2>
            </div>
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
                                                <button onClick={()=>handleDeletePurchased(product._id)} className="btn btn-sm btn-neutral">Delete</button>
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