import { useContext, useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { AuthContext } from "../Providers/AuthProvider";
import FoodCard from "./FoodCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyFoods = () => {
    const { user, state } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {

        // fetch(`https://restaurant-management-server-flax.vercel.app/myFoods/?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setData(data))

            axiosSecure.get(`/myFoods/?email=${user?.email}`)
            .then(res => setData(res.data))

    }, [user?.email, state]);

    return (
        <div>
            <PageTitle title="MahirRestaurant | My Foods"></PageTitle>
            <div className='bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">My Food Items</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
                    {
                        data.length == 0 ?
                            <div className="lg:ml-96 w-full">
                                <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">There is No Added Items</h2>
                            </div> :
                            data.map(product => <FoodCard
                                key={product._id}
                                product={product}
                            ></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyFoods;