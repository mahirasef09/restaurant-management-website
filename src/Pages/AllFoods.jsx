
import { useContext, useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import { AuthContext } from '../Providers/AuthProvider';
import AllFoodsCard from './AllFoodsCard';

const AllFoods = () => {
    const { state } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setData(data))
    }, [state]);

    return (
        <div className='w-11/12 mx-auto'>
            <PageTitle title="MahirRestaurant | All Foods"></PageTitle>
            <div className="flex justify-center my-5">
                <input type="text" placeholder="Search" className="input input-bordered w-80" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                {
                    data.map(product => <AllFoodsCard key={product._id} product={product}></AllFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;