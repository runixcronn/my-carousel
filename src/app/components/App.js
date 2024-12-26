import React, { useState, useEffect } from "react";
import "@/app/styles/global.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      const data = await response.json();
      setImages(data.map((img) => img.download_url));
    };

    fetchImages();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((pre) => (pre === 0 ? images.length - 1 : pre - 1));
  };

  const handleNext = () => {
    setCurrentIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
  };

  return (
    <>
      <h1> Project 01 : Carousel </h1>
      <div className="carousel">
        {images.length > 0 ? (
          <>
            <button className="nav-button left" onClick={handlePrev}>
              &#10094;
            </button>
            <div className="image-container">
              <img
                src={images[currentIndex]}
                alt={`Rastgele fotoğraf ${currentIndex}`}
              />
            </div>
            <button className="nav-button right" onClick={handleNext}>
              &#10095;
            </button>
          </>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </div>
    </>
  );
};

export default App;
