import React, { useEffect, useState } from "react";
import { Group, Layer, Rect, Stage, Image as KonvaImage } from "react-konva";
import Konva from "konva";

type Props = {
  images: string[];
  width: number;
  height: number;
};

type SizedImage = {
  image: HTMLImageElement;
  scaledWidth: number;
  scaledHeight: number;
  offsetX: number;
  offsetY: number;
};

export const ImageSlider: React.FC<Props> = ({ images, width, height }) => {
  const [sizedImages, setSizedImages] = useState<SizedImage[]>([]);
  const [positionX, setPositionX] = useState(0);

  const loadImage = (src: string) => {
    return new Promise<SizedImage>((resolve) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        const ratio = img.width / img.height;
        let scaledWidth = width;
        let scaledHeight = scaledWidth / ratio;
        if (scaledHeight > height) {
          scaledHeight = height;
          scaledWidth = scaledHeight * ratio;
        }
        resolve({
          image: img,
          scaledWidth,
          scaledHeight,
          offsetX: (width - scaledWidth) / 2,
          offsetY: (height - scaledHeight) / 2,
        });
      };
    });
  };

  const loadAllImages = async () => {
    const allImages = await Promise.all(images.map(loadImage));
    setSizedImages(allImages);
  };

  useEffect(() => {
    loadAllImages();
  }, []);

  const renderImage = (index: number) => {
    const item = sizedImages[index];
    const posX = width * index;

    return (
      <React.Fragment key={index}>
        <Rect x={posX} y={0} width={width} height={height} fill='#ccc' />
        <KonvaImage
          image={item.image}
          x={item.offsetX + posX}
          y={item.offsetY}
          width={item.scaledWidth}
          height={item.scaledHeight}
        />
      </React.Fragment>
    );
  };

  const handleDragMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    document.body.style.cursor = "grabbing";
    e.target.y(0); //block Y axis

    let targetX = e.target.x();
    if (targetX < (images.length - 1) * -width) {
      targetX = (images.length - 1) * -width;
      e.target.x(targetX);
    }
    if (targetX > 0) {
      targetX = 0;
      e.target.x(targetX);
    }
    setPositionX(targetX);
  };

  return (
    <div>
      <Stage width={width} height={height}>
        <Layer>
          <Group
            x={positionX}
            y={0}
            draggable
            onDragMove={handleDragMove}
            onDragEnd={() => {
              document.body.style.cursor = "grab";
            }}
            onMouseOver={() => {
              document.body.style.cursor = "grab";
            }}
            onMouseOut={() => {
              document.body.style.cursor = "default";
            }}
          >
            {sizedImages.map((_, index) => {
              return renderImage(index);
            })}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};
