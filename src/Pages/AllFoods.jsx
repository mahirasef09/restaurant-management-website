
import { useContext, useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import { AuthContext } from '../Providers/AuthProvider';
import AllFoodsCard from './AllFoodsCard';
import { IoSearchOutline } from 'react-icons/io5';

const AllFoods = () => {
    const { state, setState } = useContext(AuthContext);
    const [foodData, setFoodData] = useState([]);
    const [searchItem, setSearchItem] = useState([]);
    const [searchFoodName, setSearchFoodName] = useState("");


    useEffect(() => {
        fetch('https://restaurant-management-server-flax.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoodData(data))
    }, [state]);


    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchInputItem = form.searchInputItem.value;
        setSearchFoodName(searchInputItem);
        setState(!state);
    }

    useEffect(() => {
        fetch(`https://restaurant-management-server-flax.vercel.app/searchFoods/?name=${searchFoodName}`)
            .then(res => res.json())
            .then(data => setSearchItem(data))
    }, [state]);

    return (
        <div className='w-11/12 mx-auto'>
            <PageTitle title="MahirRestaurant | All Foods"></PageTitle>

            <div className='bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">All Food Items</h2>
            </div>

            <form onSubmit={handleSearch} className="flex justify-center gap-3 my-5">
                <input type="text" name="searchInputItem" placeholder="Search" className="input input-bordered w-80" />
                <button className='btn btn-neutral'><IoSearchOutline /></button>
            </form>

            <div className='flex justify-center items-center my-5'>
                {
                    searchItem.map(product => <AllFoodsCard key={product._id} product={product}></AllFoodsCard>)
                }
            </div>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                    {
                        foodData.map(product => <AllFoodsCard key={product._id} product={product}></AllFoodsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoods;