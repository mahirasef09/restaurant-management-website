import { Link } from "react-router-dom";
 
const Banner = () => {
    return (
        <div className="mt-5">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/QdfT82L/Banner.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Traditional Foods in the best taste and price.</h1>
                        <p className="mb-5">Savor Every Bite at Mahir Restaurant.
                        Discover bold flavors, fresh ingredients, and unforgettable dining experiences. Reserve your table today!</p>
                        <button className="btn btn-primary">
                            <Link to={'/allFoods'}>
                                All Foods
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;