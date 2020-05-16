import React from 'react'

const ImageDisplay = ({ imageUrl, celebName }) => {
    return (
        <div>
            <img src= {imageUrl} alt="" width="500px" height="450px" />
            <p>{celebName.name}</p>
        </div>
    );
};

export default ImageDisplay