import React from "react";
import { Card } from "./imagecard.styles";

const ImageCard: React.FC<{
  view?: string;
  width?: string;
  height?: string;
  padding?: string;
  src: string;
  className?: string;
}> = ({ width, view, height, padding, src, className }) => {
  return (
    <Card width={width} height={height} padding={padding} view={view} className={className}>
      <img src={src} alt="" />
    </Card>
  );
};

export default ImageCard;
