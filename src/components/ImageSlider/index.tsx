import React from 'react';

import {
  Container,
  ImageSelectorList,
  ImageSelector,
  ImageWrapper,
  Image,
  ImageSelectorItem,
} from './styles';

type ImageSliderProps = {
  imagesURL: string[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ imagesURL }) => {
  return (
    <Container>
      <ImageSelectorList>
        <ImageSelectorItem>
          <ImageSelector isActive={true} />
        </ImageSelectorItem>
        <ImageSelectorItem>
          <ImageSelector isActive={false} />
        </ImageSelectorItem>
        <ImageSelectorItem>
          <ImageSelector isActive={false} />
        </ImageSelectorItem>
        <ImageSelectorItem>
          <ImageSelector isActive={false} />
        </ImageSelectorItem>
      </ImageSelectorList>
      <ImageWrapper>
        <Image source={{ uri: imagesURL[0] }} resizeMode="contain" />
      </ImageWrapper>
    </Container>
  );
};
