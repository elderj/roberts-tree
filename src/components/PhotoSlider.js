import React, { useState, useEffect } from "react";

const PhotoSlider = ({ photoUrls }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photoUrls.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextPhoto, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="gallery">
      <img
        src={photoUrls[currentPhotoIndex]}
        alt={`Photo ${currentPhotoIndex + 1}`}
        className="gallery-image"
      />
      <button onClick={prevPhoto}>Previous</button>
      <button onClick={nextPhoto}>Next</button>
    </div>
  );
};

export default PhotoSlider;
