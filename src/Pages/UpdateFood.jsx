import Swal from "sweetalert2";
import PageTitle from "./PageTitle";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
    const { state, setState } = useContext(AuthContext);
    const product = useLoaderData();
    const { _id, name, category, description, origin, quantity,  price, userName, userEmail, image } = product;

    const handleUpdateFood = (e) => {
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
    
            const updatedFood = { name, category, description, origin, quantity, price, adderEmail, adderName, image }
    
            // console.log(newFood);
    
            // sending data to the server
            fetch(`http://localhost:5000/foods/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedFood)
            })
                .then(res => res.json())
                .then(data => {
    
                    // console.log("Food Updated Successfully in DB", data);
    
                    if (data.modifiedCount) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Food Updated Successfully in DB',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
    
                        setState(!state);
                    }
                })
        }

    return (
        <div>
            <PageTitle title="MahirRestaurant | Update Food"></PageTitle>
            <div className='lg:w-3/4 mx-auto bg-base-100'>
                <div className="text-center pt-5">
                    <h1 className="text-5xl font-extrabold">Update Food!</h1>
                </div>
                <div className="card w-full shrink-0">
                    <form onSubmit={handleUpdateFood} className="card-body">
                        {/* form first row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={name} placeholder="Food Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Category</span>
                                </label>
                                <input type="text" name='category' defaultValue={category} placeholder="Food Category" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form second row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Description</span>
                                </label>
                                <input type="text" name='description' defaultValue={description} placeholder="Food Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Food Origin</span>
                                </label>
                                <input type="text" name='origin' defaultValue={origin} placeholder="Food Origin" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Quantity</span>
                                </label>
                                <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Price</span>
                                </label>
                                <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form fourth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Add By (Email)</span>
                                </label>
                                <input type="email" name='adderEmail' defaultValue={userEmail} disabled placeholder="Add By (Email)" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Add By (Name)</span>
                                </label>
                                <input type="text" name='adderName' defaultValue={userName
                                } disabled placeholder="Add By (Name)" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Food Image</span>
                            </label>
                            <input type="text" name='image' defaultValue={image} placeholder="Food Image" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Update Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;