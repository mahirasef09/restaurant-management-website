import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "./PageTitle";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const { userLogin, signInUserWithGoogle, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then((result) => {
                const currentUser = result.user;
                setUser(currentUser);
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                e.target.reset();
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Oops'
                });
                // setLoading(false);
                e.target.reset();
            });

    }

    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then(result => {
                const currentUser = result.user;
                // console.log(currentUser);
                setUser(currentUser);
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successful with Google',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Oops'
                });
                // setLoading(false);
            })
    }

    return (
        <div>
            <PageTitle title="MahirRestaurant | Login"></PageTitle>
            <div className='min-h-screen bg-white dark:bg-black flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-3xl shadow-2xl">
                    <h3 className='text-2xl font-extrabold text-center'>Welcome Back!</h3>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="relative form-control">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
                            <p
                                onClick={() => setShowPassword(!showPassword)}
                                className='btn btn-xs absolute right-4 top-3'>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Get Started</button>
                        </div>
                        <div className="divider">or</div>
                        <div className="form-control">
                            <button 
                            onClick={handleGoogleSignIn} 
                            className="btn bg-gray-200"><FcGoogle />Continue with Google</button>
                        </div>
                    </form>
                    <p className='text-center text-xs font-semibold'>Don’t Have An Account ? <Link className='text-blue-500' to={"/auth/register"}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;