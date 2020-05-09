import React from 'react'

const ImageDisplay = ({ imageUrl }) => {
    return (
        <div>
            <img src= {imageUrl} alt="" width="500px" height="450px" />
        </div>
    );
};

export default ImageDisplay