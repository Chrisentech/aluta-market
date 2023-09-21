import React, { useState } from 'react';
import styled from 'styled-components';

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
        <ImageList size={56}>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Product Thumbnail ${index}`}
              isSelected={image === selectedImage}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </ImageList>
      </CarouselContainer>
    );
  };

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedImage = styled.img`
  width: 380px; 
  height: 380px; 
  border-radius: 4px;
  border: 1px solid #DEE2E7;
`;

const ImageList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 380px;
  margin-top: 24px; 
`;

interface ThumbnailProps {
    isSelected: boolean;
    size: number;
}

const Thumbnail = styled.img<ThumbnailProps>`
  width: ${({ size }) => (size ? size + 'px' : '56px')};
  height: ${({ size }) => (size ? size + 'px' : '56px')}; 
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#505050' : '#DEE2E7')};

  &:hover {
    border-color: #505050; 
  }
`;

export default ProductCarousel;
