
import PageTitle from './PageTitle';

const Gallery = () => {
    return (
        <div>
            <PageTitle title="MahirRestaurant | Gallery"></PageTitle>
            <h2 className="mb-5 text-black dark:text-white text-center text-5xl font-extrabold">My Restaurant Gallery</h2>
            <div className='flex justify-center'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/JyvZgQ1/Gallery1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/P6Vm6sv/Gallery2.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/RhMRqG4/Gallery3.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/g9W2VGg/Gallery4.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/jRTrhH9/Gallery5.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/Z6bxR7r/Gallery6.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/VBDj16q/Gallery7.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/z2WpPSx/Gallery8.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/4pMrxS9/Gallery9.jpg" alt="" />
                    </div>
                    <div >
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/X4wKJjp/Gallery10.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;