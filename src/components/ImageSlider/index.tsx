import React from 'react';

import {
  Container,
  ImageSelectorList,
  ImageSelector,
  ImageWrapper,
  Image,
} from './styles';

type ImageSliderProps = {
  imagesURL: string[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ imagesURL }) => {
  return (
    <Container>
      <ImageSelectorList>
        <ImageSelector active={true} />
        <ImageSelector active={false} />
        <ImageSelector active={false} />
        <ImageSelector active={false} />
      </ImageSelectorList>
      <ImageWrapper>
        <Image source={{ uri: imagesURL[0] }} resizeMode="contain" />
      </ImageWrapper>
    </Container>
  );
};
