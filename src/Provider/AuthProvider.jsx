import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [state, setState] = useState(false);

    const handleSelectedProduct = (product) => {
        const isExist = selectedProducts.find(p => p._id === product._id);
        if (isExist) {
            Swal.fire({
                title: 'Error!',
                text: 'Item Already Exist',
                icon: 'error',
                confirmButtonText: 'Oops'
            });
        }

        else {
            Swal.fire({
                title: 'Success!',
                text: 'Item Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            const newProduct = [...selectedProducts, product];
            setSelectedProducts(newProduct);
        }
    }

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData)
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userLogout = () => {
        setLoading(true);
        Swal.fire({
            title: 'Success!',
            text: 'Log Out Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        products,
        setProducts,
        user,
        setUser,
        loading,
        setLoading,
        selectedProducts,
        setSelectedProducts,
        state,
        setState,
        handleSelectedProduct,
        createNewUser,
        updateUserProfile,
        userLogin,
        signInUserWithGoogle,
        userLogout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;