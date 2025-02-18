
import Banner from '../Pages/Banner';
import Branch from '../Pages/Branch';
import ContactUs from '../Pages/ContactUs';
import PageTitle from '../Pages/PageTitle';
import TopFoods from '../Pages/TopFoods';
import WhyUs from '../Pages/WhyUs';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <PageTitle title="MahirRestaurant | Home"></PageTitle>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <WhyUs></WhyUs>
            <ContactUs></ContactUs>
            <Branch></Branch>
        </div>
    );
};

export default Home;