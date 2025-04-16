import React, { useState } from 'react';

function ImagePopup({ selectedImage, onClose }) {
    const [rotate, setRotate] = useState(false);

    const handleMouseEnter = () => {
        setRotate(true);
    };

    const handleMouseLeave = () => {
        setRotate(false);
    };

    return (
        <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.09)] flex justify-center items-center z-50 opacity-100 pointer-events-auto transition-opacity duration-300"
            onClick={onClose} // Close the popup when clicked outside of the image
        >
            
            <div
                className="relative p-5 bg-[rgba(0,0,0,0.09)] rounded-lg shadow-xl transform transition-transform duration-500"
                onClick={(e) => e.stopPropagation()} // Prevent closing the popup if the image is clicked
            >
                <div
                    className={`relative transition-transform duration-500 transform ${rotate ? 'rotate-3d' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-[320px] max-h-[320px] rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default ImagePopup;
