import React from 'react';
import Lottie from "lottie-react";
import SoonAnimation from '../assets/soon-animation.json'
const Soon = () => {
    return (
        <div className='p-2 w-full h-full flex justify-center items-center flex-col gap-[20px] py-[50px]'>
            <p className='text-white font-medium italic'>
            This page will be available soon...
            </p>
            <div className='w-[400px] soon-border'>
                <Lottie animationData={SoonAnimation} />
            </div>
        </div>
    );
}

export default Soon;
