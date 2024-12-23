import { useContext, useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { AuthContext } from "../Providers/AuthProvider";
import FoodCard from "./FoodCard";

const MyFoods = () => {
    const { user, state } = useContext(AuthContext);
        const [data, setData] = useState([]);
    
        useEffect(() => {
            fetch(`http://localhost:5000/myFoods/?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setData(data))
        }, [user?.email, state]);

    return (
        <div>
            <PageTitle title="MahirRestaurant | My Foods"></PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-7 my-5">
                {
                    data.length == 0 ?
                        <div className="md:ml-96 w-full">
                            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">There is No Added Items</h2>
                        </div> :
                        data.map(product => <FoodCard
                            key={product._id}
                            product={product}
                        ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default MyFoods;