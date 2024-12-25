import { FaArrowRightLong } from "react-icons/fa6";

const Branch = () => {
    return (
        <div>
            <h2 className="mb-10 text-black dark:text-white text-center text-5xl font-extrabold">Our Branches</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Card-1 */}
                <div className="card bg-gray-100 shadow-xl p-3">
                    <figure className="px-5 pt-5">
                        <img
                            src="https://i.ibb.co.com/W2XmPRt/Branch1.jpg"
                            alt="Kawran Bazar Branch"
                            className="rounded-none h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold">Kawran Bazar</h2>
                        <div className="card-actions">
                            <button className="btn btn-accent">See <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="card bg-gray-100 shadow-xl p-3">
                    <figure className="px-5 pt-5">
                        <img
                            src="https://i.ibb.co.com/LCRW7Cg/Branch2.jpg"
                            alt="Tongi Branch"
                            className="rounded-none h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold">Tongi</h2>
                        <div className="card-actions">
                            <button className="btn btn-accent">See <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="card bg-gray-100 shadow-xl p-3">
                    <figure className="px-5 pt-5">
                        <img
                            src="https://i.ibb.co.com/y61G3mz/Branch3.jpg"
                            alt="Dhanmondi Branch"
                            className="rounded-none h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold">Dhanmondi</h2>
                        <div className="card-actions">
                            <button className="btn btn-accent">See <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branch;