import React from "react";
import { Card } from "./imagecard.styles";

const ImageCard: React.FC<{
  view: string;
  width?: string;
  height?: string;
  padding?: string;
  src: string;
}> = ({ width, view, height, padding, src }) => {
  return (
    <Card width={width} height={height} padding={padding} view={view}>
      <img src={src} alt="" />
    </Card>
  );
};

export default ImageCard;
