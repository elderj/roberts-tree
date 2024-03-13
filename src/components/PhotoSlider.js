import React, { useState, useEffect } from "react";

const PhotoSlider = ({ photoUrls }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextPhoto, 5000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="gallery">
      <img
        onClick={() => nextPhoto()}
        src={photoUrls[currentPhotoIndex]}
        alt={`treework-${currentPhotoIndex + 1}`}
        className="gallery-image"
      />
    </div>
  );
};

export default PhotoSlider;
