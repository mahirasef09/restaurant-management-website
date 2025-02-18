import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useEffect } from "react";
import AllFoodsCard from "./AllFoodsCard";
import { Link } from "react-router-dom";

const TopFoods = () => {
    const { state } = useContext(AuthContext);
    const [foodData, setFoodData] = useState([]);


    useEffect(() => {
        fetch('https://restaurant-management-server-flax.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoodData(data))
    }, [state]);

    const foodDataSorted = [...foodData].sort((a, b) => b.purchaseCount - a.purchaseCount);
    const limitedFoodData = foodDataSorted.slice(0, 8);

    return (
        <div>
            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold my-5">Top Foods</h2>
            <div className="flex justify-center">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5'>
                    {
                        limitedFoodData.map(product => <AllFoodsCard key={product._id} product={product}></AllFoodsCard>)
                    }
                </div>
            </div>
            <div className="flex justify-center my-10">
                <button className="btn btn-accent btn-wide">
                    <Link to={'/allFoods'}>
                        All Foods
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default TopFoods;