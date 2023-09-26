import React, { useState } from 'react';
import { 
  CarouselContainer, 
  ColorItem, 
  ColorListContainer, 
  GrayBox, ImageList, 
  SelectedImage, 
  Thumbnail 
} from './ProductCarousel.style';


//Component to handle choosing product color

type Color = {
  name: string;
  imageUrl: string;
}

interface ColorListProps {
  colors: Color[];
}

export const ColorList: React.FC<ColorListProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<Color>();

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color);
  };

  const displayedColors = colors.slice(0, 5);

  // Calculate the number of gray boxes needed
  const grayBoxCount = Math.max(0, 5 - colors.length);

  return (
    <ColorListContainer>
      {displayedColors.map((color, index) => (
        <ColorItem 
          key={index}
          isSelected={color === selectedColor}
          onClick={() => handleColorSelect(color)}
        >
          <img src={color.imageUrl} alt={color.name} />
        </ColorItem>
      ))}

      {/* Render gray boxes for missing colors */}
      {Array.from({ length: grayBoxCount }).map((_, index) => (
        <GrayBox key={`gray-${index}`} />
      ))}
    </ColorListContainer>
  );
};


// Main Carousel component

interface ProductCarouselProps {
  images: string[]; // Array of image URLs
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  
    const handleImageSelect = (image: string) => {
      setSelectedImage(image);
    };
  
    return (
      <CarouselContainer>
        <SelectedImage src={selectedImage} alt="Selected Product" />
        <ImageList>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              size={56}
              alt={`Product Thumbnail ${index}`}
              isSelected={image === selectedImage}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </ImageList>
      </CarouselContainer>
    );
  };

export default ProductCarousel;






