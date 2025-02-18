
import { useContext } from 'react';
import PageTitle from './PageTitle';
import { AuthContext } from '../Providers/AuthProvider';
import moment from 'moment';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';

const FoodPurchase = () => {
    const { user, state, setState } = useContext(AuthContext);
    const [err, setErr] = useState(false);
    const product = useLoaderData();
    const { _id, name, quantity, price, adderEmail } = product;

    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const buyingDate = form.buyingDate.value;
        const purchaseQuantity = form.purchaseQuantity.value;
        const price = form.price.value;
        const buyerEmail = form.buyerEmail.value;
        const buyerName = form.buyerName.value;

        const purchasedFood = {
            food_id: _id,
            name,
            purchaseQuantity,
            purchasePrice: purchaseQuantity * price,
            buyingDate,
            buyerEmail,
            buyerName
        }


        if (quantity == 0) {
            setErr(true);
            Swal.fire({
                title: 'Error!',
                text: 'Item is not available',
                icon: 'error',
                confirmButtonText: 'Oops'
            });
            return;
        }

        if (purchaseQuantity > quantity) {
            setErr(true);
            Swal.fire({
                title: 'Error!',
                text: 'Item is not sufficient in amount',
                icon: 'error',
                confirmButtonText: 'Oops'
            });
            return;
        }

        if (user?.email == adderEmail) {
            setErr(true);
            Swal.fire({
                title: 'Error!',
                text: 'Item can not be purchased because you added it',
                icon: 'error',
                confirmButtonText: 'Oops'
            });
            return;
        }

        fetch(`https://restaurant-management-server-flax.vercel.app/purchasedFoods`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasedFood)
        })
            .then(res => res.json())
            .then(data => {

                // console.log("Purchased Food Added Successfully in DB", data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Purchase Successful',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    e.target.reset();
                    setState(!state);
                }
            })


    }

    return (
        <div className='min-h-screen'>
            <PageTitle title="MahirRestaurant | Food Purchase"></PageTitle>
            <div className='lg:w-3/4 mx-auto bg-base-100'>
                <div className="text-center pt-5">
                    <h1 className="text-5xl font-extrabold">Food Purchase!</h1>
                </div>
                <div className="card w-full shrink-0">
                    <form onSubmit={handlePurchase} className="card-body">
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
                                    <span className="label-text font-bold">Buying Date</span>
                                </label>
                                <input type="text" name='buyingDate' defaultValue={moment().format('D/MM/YYYY, h:mm:ss a')} placeholder="Buying Date" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Purchase Quantity</span>
                                </label>
                                <input type="text" name='purchaseQuantity' placeholder="Purchase Quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Price/Item</span>
                                </label>
                                <input type="text" name='price' defaultValue={price} placeholder="Price/Item" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form fourth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Buyer Email</span>
                                </label>
                                <input type="email" name='buyerEmail' defaultValue={user?.email} disabled placeholder="Buyer Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Buyer Name</span>
                                </label>
                                <input type="text" name='buyerName' defaultValue={user?.displayName
                                } disabled placeholder="Buyer Name" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            {
                                err == true ? <button className="btn btn-disabled">Purchase</button> :
                                        <button className="btn btn-neutral">Purchase</button>
                                    
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchase;