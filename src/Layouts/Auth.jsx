
import NavBar from '../Pages/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Auth = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Auth;