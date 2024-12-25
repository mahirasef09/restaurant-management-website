import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { userLogout } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        },
            error => {
                // console.log('error caught in interceptors', error);

                if (error.status === 401 || error.status === 403) {
                    // console.log('Need to logout the user');
                    userLogout()
                        .then(() => {
                            // console.log('logged out user');
                            navigate('/auth/login');
                        })
                        .catch(error => {
                            // console.log(error);
                            Swal.fire({
                                title: 'Error!',
                                text: error,
                                icon: 'error',
                                confirmButtonText: 'Oops'
                            });
                        })
                }

                return Promise.reject(error);
            })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;