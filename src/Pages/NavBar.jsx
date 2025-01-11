import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { IoMoon, IoSunny } from "react-icons/io5";
import { AuthContext } from "../Providers/AuthProvider";
import { RiRestaurant2Line } from "react-icons/ri";

const NavBar = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allFoods'}>All Foods</NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><RiRestaurant2Line />MahirRestaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2 items-center">
                        <div>
                            {
                                user && user?.email ?
                                    <div className="hidden md:flex gap-2 items-center" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="left">
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt="User"
                                                        src={user?.photoURL} />
                                                </div>
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                                <li>
                                                    <NavLink to={'/myFoods'}>My Foods</NavLink></li>
                                                <li><NavLink to={'/addFood'}>Add Food</NavLink></li>
                                                <li><NavLink to={'/myOrders'}>My Orders</NavLink></li>
                                            </ul>
                                        </div>
                                    </div> :
                                    <FaUserTie className="text-2xl"></FaUserTie>
                            }
                        </div>
                        <div>
                            {
                                user && user?.email ? <button onClick={userLogout} className="btn btn-neutral btn-sm hover:bg-primary">Log Out</button> :
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <Link to={"/auth/login"} className="btn btn-accent btn-sm hover:bg-success">Login</Link>
                                        <Link to={"/auth/register"} className="btn btn-accent btn-sm hover:bg-success">Register</Link>
                                    </div>
                            }
                        </div>
                        <button onClick={() => darkModeHandler()} className="mr-5 btn btn-neutral btn-sm">
                            {

                                dark && <IoSunny />
                            }
                            {
                                !dark && <IoMoon />
                            }
                        </button>
                        <Tooltip id="my-tooltip" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;