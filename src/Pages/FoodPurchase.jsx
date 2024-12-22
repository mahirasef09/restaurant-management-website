
import { useContext } from 'react';
import PageTitle from './PageTitle';
import { AuthContext } from '../Providers/AuthProvider';
import moment from 'moment';

const FoodPurchase = () => {
    const { user, state, setState } = useContext(AuthContext);
    
        const handleAddEquipment = (e) => {
            e.preventDefault();
            const form = e.target;
    
            const name = form.name.value;
            const date = form.date.value;
            const quantity = form.quantity.value;
            const price = form.price.value;
            const userEmail = form.userEmail.value;
            const userName = form.userName.value;
    
            const purchasedFood = { name, date, quantity, price, userEmail, userName}
    
            // console.log(purchasedFood);
    
            // sending data to the server
            fetch('', {
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
                            text: 'Purchased Food Added Successfully in DB',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
    
                        e.target.reset();
    
                        setState(!state);
                    }
                })
        }

    return (
        <div>
            <PageTitle title="MahirRestaurant | Food Purchase"></PageTitle>
            <div className='lg:w-3/4 mx-auto bg-base-100'>
                <div className="text-center pt-5">
                    <h1 className="text-5xl font-extrabold">Food Purchase!</h1>
                </div>
                <div className="card w-full shrink-0">
                    <form onSubmit={handleAddEquipment} className="card-body">
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
                                    <span className="label-text font-bold">Buying Date</span>
                                </label>
                                <input type="text" name='date' defaultValue={moment().format('D/MM/YYYY, h:mm:ss a')} placeholder="Buying Date" className="input input-bordered" required />
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
                                    <span className="label-text font-bold">Buyer Email</span>
                                </label>
                                <input type="email" name='userEmail' defaultValue={user?.email} disabled placeholder="Buyer Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text font-bold">Buyer Name</span>
                                </label>
                                <input type="text" name='userName' defaultValue={user?.displayName
                                } disabled placeholder="Buyer Name" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchase;