import React, { useState } from 'react';
import HerbsTemplate from '../HerbsTemplate/HerbsTemplate';
import SearchBar from '../SearchBar/SearchBar'; // Ensure correct path
import HerbsInformation from '../HerbsInformation/HerbsInformation';
import ImagePopup from './ImagePopup'; // Import ImagePopup

function ImageCarousel() {
    const [filteredTrees, setFilteredTrees] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const defaultTrees = HerbsInformation();

    const handleSearch = (results) => {
        setFilteredTrees(results);
    };
    
    // Handle the click event to show the 3D popup
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // Close the 3D popup
    const handleClosePopup = () => {
        setSelectedImage(null);
    };

    const treesToDisplay = filteredTrees.length > 0 ? filteredTrees : defaultTrees;

    return (
        <>
            <div className='flex justify-center items-center'>
                <SearchBar onSearch={handleSearch} />
            </div>

            <div className="carousel rounded-box mt-12 bg-amber-100 flex flex-row justify-between items-start space-x-6 p-6 shadow-lg w-full mb-48">
                {treesToDisplay.map((tree, index) => (
                    <div key={index} 
                        className={`carousel-item rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center ${
                            treesToDisplay.length === 1 ? 'w-full h-[350px] max-h-[350px]' : 'w-full sm:w-1/3 h-[350px] max-h-[350px]'
                        }`}
                        onClick={() => handleImageClick(tree[0])} // Trigger the 3D effect on image click
                    >
                        <HerbsTemplate
                            image={tree[0]}
                            name={tree[1]}
                            nickName={tree[2]}
                            terrain={tree[3]}
                            uses={tree[4]}
                            description={tree[5]}
                        />
                    </div>
                ))}
            </div>

            {/* Conditionally render the ImagePopup if an image is selected */}
            {selectedImage && <ImagePopup selectedImage={selectedImage} onClose={handleClosePopup} />}
        </>
    );
}

export default ImageCarousel;
