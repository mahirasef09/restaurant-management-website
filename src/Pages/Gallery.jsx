import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import PageTitle from './PageTitle';
import { useState } from 'react';

const Gallery = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <PageTitle title="MahirRestaurant | Gallery"></PageTitle>
            <div className='bg-accent dark:bg-black h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">My Restaurant Gallery</h2>
            </div>

            <div className='flex justify-center'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/JyvZgQ1/Gallery1.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/P6Vm6sv/Gallery2.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/RhMRqG4/Gallery3.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/g9W2VGg/Gallery4.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/jRTrhH9/Gallery5.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/Z6bxR7r/Gallery6.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/VBDj16q/Gallery7.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/z2WpPSx/Gallery8.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/4pMrxS9/Gallery9.jpg" alt="" />
                    </div>
                    <div onClick={() => setOpen(true)}>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/X4wKJjp/Gallery10.jpg" alt="" />
                    </div>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "https://i.ibb.co.com/JyvZgQ1/Gallery1.jpg" },
                    { src: "https://i.ibb.co.com/P6Vm6sv/Gallery2.jpg" },
                    { src: "https://i.ibb.co.com/RhMRqG4/Gallery3.jpg" },
                    { src: "https://i.ibb.co.com/g9W2VGg/Gallery4.jpg" },
                    { src: "https://i.ibb.co.com/jRTrhH9/Gallery5.jpg" },
                    { src: "https://i.ibb.co.com/Z6bxR7r/Gallery6.jpg" },
                    { src: "https://i.ibb.co.com/VBDj16q/Gallery7.jpg" },
                    { src: "https://i.ibb.co.com/z2WpPSx/Gallery8.jpg" },
                    { src: "https://i.ibb.co.com/4pMrxS9/Gallery9.jpg" },
                    { src: "https://i.ibb.co.com/X4wKJjp/Gallery10.jpg" },
                ]}
            />
        </div>
    );
};

export default Gallery;