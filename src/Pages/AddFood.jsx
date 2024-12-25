import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PageTitle from "./PageTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddFood = () => {
    const { user, state, setState } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const handleAddFood = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const origin = form.origin.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const adderEmail = form.adderEmail.value;
        const adderName = form.adderName.value;
        const image = form.image.value;
        const purchaseCount = 0;

        const newFood = { name, category, description, origin, quantity, price, adderEmail, adderName, image, purchaseCount }

        // console.log(newFood);

        // sending data to the server
        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {

                // console.log("Food Added Successfully in DB", data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Added Successfully in DB',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                    e.target.reset();

                    setState(!state);
                }
            })

            // axiosSecure.post(`/foods`)
            // .then(res => setData(res.data))
    }

    return (
        <div>
            <PageTitle title="MahirRestaurant | Add Food"></PageTitle>
            <div className='lg:w-3/4 mx-auto bg-base-100'>
                <div className="text-center pt-5">
                    <h1 className="text-5xl font-extrabold">Add Food!</h1>
                </div>
                <div className="card w-full shrink-0">
                    <form onSubmit={handleAddFood} className="card-body">
                        {/* form first row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Food Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Category</span>
                                </label>
                                <input type="text" name='category' placeholder="Food Category" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form second row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Food Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Origin</span>
                                </label>
                                <input type="text" name='origin' placeholder="Food Origin" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form fourth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Add By (Email)</span>
                                </label>
                                <input type="email" name='adderEmail' defaultValue={user?.email} disabled placeholder="Add By (Email)" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Add By (Name)</span>
                                </label>
                                <input type="text" name='adderName' defaultValue={user?.displayName
                                } disabled placeholder="Add By (Name)" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Food Image</span>
                            </label>
                            <input type="text" name='image' placeholder="Food Image" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;