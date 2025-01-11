import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import { PiChalkboardTeacherThin } from 'react-icons/pi';
import { RiTeamLine } from 'react-icons/ri';
import PageTitle from './PageTitle';
import { MdFastfood } from 'react-icons/md';

const AboutUs = () => {
    return (
        <div>
            <PageTitle title="MahirRestaurant | About Us"></PageTitle>
            <div className='my-5 bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-4xl font-extrabold">About Us</h2>
            </div>
            <div className="footer footer-center bg-gray-400 text-primary-content p-10 rounded-3xl">
                <div>
                    <PiChalkboardTeacherThin className="text-5xl"></PiChalkboardTeacherThin>
                    <h3 className="text-3xl font-extrabold">Dedicated Support</h3>
                </div>
                <div>
                    <RiTeamLine className="text-5xl"></RiTeamLine>
                    <h3 className="text-3xl font-extrabold">Responsive Team</h3>
                </div>
                <div>
                    <MdFastfood className="text-5xl"></MdFastfood>
                    <h3 className="text-3xl font-extrabold">Exclusive Food Items</h3>
                </div>
                <div>
                    <GiTeacher className="text-5xl"></GiTeacher>
                    <h3 className="text-3xl font-extrabold">Unique Service</h3>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;