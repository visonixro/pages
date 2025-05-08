import React from "react";
import "../styles/ImageCarousel.css";

// Importa tus imágenes
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";

const images = [img1, img2, img3];

function ImageCarousel() {
  // Duplicamos las imágenes para crear el bucle infinito
  const allImages = [...images, ...images];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {allImages.map((img, index) => (
          <img key={index} src={img} className="carousel-image" />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
