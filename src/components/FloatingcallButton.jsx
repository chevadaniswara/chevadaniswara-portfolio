import React from 'react';
import { BsTelephone, BsCircle } from 'react-icons/bs';

function FloatingCallButton() {
    
    const handleCallClick = () => {
        window.location.href = 'tel:112';
    };

    return (
        <div className="fixed z-50 bottom-10 right-8 md:hidden">
            <button className="bg-red-500 w-14 h-14 rounded-full flex justify-center items-center text-white text-4xl hover:bg-red-700 duration-300"
            onClick={handleCallClick}
            >
                <span>
                    <BsTelephone size={30} className="absolute animate-pulse" />
                    <BsCircle size={30} className="animate-ping" />
                </span>
            </button>
        </div>
    );
}

export default FloatingCallButton;