import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const WhyUs = () => {
    return (
        <div>
            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">Why Us</h2>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Fade duration={6000}>
                        <img
                            src="https://i.ibb.co.com/TkGmH5s/whyUs.jpg"
                            className="max-w-xs rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-bold">We Provide the Best</h1>
                            <p className="text-2xl py-6">
                                At our restaurant, we believe exceptional dining goes beyond great food. Here’s what sets us apart: Unmatched Quality, Innovative Flavors, Exceptional Service, Inviting Ambiance, Community Commitment...etc
                            </p>
                            <button className="btn btn-primary">
                                <Link to={'/allFoods'}>
                                    Get Started
                                </Link>
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;