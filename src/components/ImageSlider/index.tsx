import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

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

type OnHandleImageSelector = {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
};

export const ImageSlider: React.FC<ImageSliderProps> = ({
  imagesURL,
}: ImageSliderProps) => {
  const [selectedImage, setSelectedImage] = useState(imagesURL[0]);

  const onHandleChangeImage = useRef((info: OnHandleImageSelector) => {
    setSelectedImage(info.viewableItems[0].item);
  });

  return (
    <Container>
      <ImageSelectorList>
        {imagesURL.map((imageURL) => (
          <ImageSelectorItem key={imageURL}>
            <ImageSelector isActive={selectedImage === imageURL} />
          </ImageSelectorItem>
        ))}
      </ImageSelectorList>
      <FlatList
        data={imagesURL}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ImageWrapper>
            <Image source={{ uri: item }} resizeMode="contain" />
          </ImageWrapper>
        )}
        onViewableItemsChanged={onHandleChangeImage.current}
      />
    </Container>
  );
};
